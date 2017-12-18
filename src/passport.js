'use strict';

import passport from 'passport';
import  TwitterTokenStrategy from 'passport-twitter-token';
import AppConfig from './data/config';

module.exports = function () {

  passport.use(new TwitterTokenStrategy({
      consumerKey: AppConfig.consumer_key,
      consumerSecret: AppConfig.consumer_secret,
      includeEmail: true
    },
    (token, tokenSecret, profile, done) => {
      return done(null, token, tokenSecret, profile);
    }));

};