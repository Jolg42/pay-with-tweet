'use strict';

import path from 'path';
import fs from 'fs';
import { Server } from 'http';
import Express from 'express';
import session from 'express-session';
import React from 'react';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import AppConfig from './data/config';
import request from 'request';
import cors from 'cors';
import bodyParser from 'body-parser';
import NotFoundPage from './components/NotFoundPage';
import DownloadHandler from './file-downloads';
import jwt  from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import passport  from 'passport';
import passportConfig from './passport';
import DownloadCache from './downloadCache';
import Twit from 'Twit';
import ebooks from './data/Ebooks';

passportConfig();


// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(session({secret: 'currentSession'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(cors(corsOption));
// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/twitterResponse', (req, res) => {
  return res.render('index', { markup: "OK" });
});

app.post('/auth/twitter/reverse', function(req, res) {
  let oauth = {
    oauth_callback: "http%3A%2F%2Flocalhost%3A3000%2FtwitterResponse",
    consumer_key: AppConfig.consumer_key,
    consumer_secret: AppConfig.consumer_secret
  };
  request.post({
    url: 'https://api.twitter.com/oauth/request_token',
    oauth: {
      oauth_callback: "http%3A%2F%2Flocalhost%3A3000%2FtwitterResponse",
      consumer_key: AppConfig.consumer_key,
      consumer_secret: AppConfig.consumer_secret
    }
  }, function (err, r, body) {
    if (err) {
      return res.send(500, { message: e.message });
    }
    var jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    res.send(JSON.parse(jsonStr));
  });
});


app.post('/auth/twitter/:book/', (req, res, next) => {
  let sess = req.session;
  sess.currentBookId = req.params.book;
  request.post({
    url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
    oauth: {
      consumer_key: AppConfig.consumer_key,
      consumer_secret: AppConfig.consumer_secret,
      token: req.query.oauth_token
    },
    form: { oauth_verifier: req.query.oauth_verifier }
  }, function (err, r, body) {
    if (err) {
      return res.send(500, { message: err.message });
    }
    const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    const parsedBody = JSON.parse(bodyString);
    req.body = {};
    req.body['oauth_token'] = parsedBody.oauth_token;
    req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
    req.body['user_id'] = parsedBody.user_id;

    next();
  });
}, passport.authenticate('twitter-token', {session: false}), function(req, res, next) {
    if (!req.user) {
      return res.send(401, 'User Not Authenticated');
    } else {
      let sess = req.session;
      const currentEbook = ebooks.find((item) => {
        return item.id == sess.currentBookId;
      });
      let tweetContent = `I just downloaded ${currentEbook.title} 📖 by @pay_with_tweet. ${currentEbook.version}. Check it out! ${Math.floor((Math.random() * 100) + 1)}`;
      const tweet = new Twit({
        consumer_key:         AppConfig.consumer_key,
        consumer_secret:      AppConfig.consumer_secret,
        access_token:         req.body.oauth_token,
        access_token_secret:  req.body.oauth_token_secret,
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      });
      tweet.post('statuses/update', { status: tweetContent }, function(err, data, response) {});      
    }
   
    // prepare token for API
    req.auth = {
      id: req.user.id
    };

    return next();
  }, function (req, res, next) {
    req.token = createToken(req.auth);
    return next();
  }, function (req, res) {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
  });

var createToken = function (auth) {
  return jwt.sign({
    id: auth.id
  }, `${AppConfig.consumer_secret}`,
  {
    expiresIn: 60 * 120
  });
}  
//token handling middleware
var authenticate = expressJwt({
secret: 'my-secret',
requestProperty: 'auth',
getToken: function(req) {
  if (req.headers['x-auth-token']) {
    return req.headers['x-auth-token'];
  }
  return null;
}
});

app.get('/download/:id', (req, res) => {
  let downloadSid = req.params.id;
  DownloadHandler.getDownloadFilePath(downloadSid, (err, path) => {
    if (err) {
      return res.render('index', { markup: "This download link is not valid anymore" })
    } 
    console.log(path);
    let file = fs.createReadStream(path);
    let stat = fs.statSync(path);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${downloadSid}.pdf`);
    file.pipe(res);
    DownloadHandler.deleteDownload(downloadSid, (err) => {
        console.log('Link deleted');
    });
  });
});

app.get('/generateDownload', (req, res) => {
  let sess = req.session;
  if( sess.currentBookId ){
    DownloadHandler.createDownload(`${__dirname}/pdf/${sess.currentBookId}.pdf`, (err, sid) => {
      console.log(err);
      res.setHeader('Content-Type', 'application/json');
      console.log(JSON.stringify({ link: `${AppConfig.url}download/${sid}` }));
      res.send(JSON.stringify({ link: `${AppConfig.url}download/${sid}` }));  
    });
  } else {
    return res.end('The link has been already generated');  }
});

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
