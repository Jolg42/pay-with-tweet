'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.js';
import NotFoundPage from './components/NotFoundPage.js';
import DownloadHandler from './file-downloads.js';
// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/download/:sid', (req, res) => {
  // Get the download sid
  let downloadSid = req.params.sid;
  // Get the download file path
  DownloadHandler.getDownloadFilePath(downloadSid, (err, path) => {
    if (err) {
      return res.end('Error');
    } 
    // Read and send the file here...
    // Finally, delete the download session to invalidate the link
    DownloadHandler.deleteDownload(downloadSid, function(err) {
        console.log('Link deleted');
    });
  });
});

app.get('/generateDownload/:id', (req, res) => {
  DownloadHandler.createDownload(`${__dirname}/pdf/${req.params.id}.pdf`, (err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ link: 'http://localhost:3000/download/1' }));  
  });
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
