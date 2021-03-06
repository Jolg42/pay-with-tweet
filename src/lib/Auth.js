import auth0 from 'auth0-js';
import axios from 'axios';
import AppConfig from '../data/config';

export default class Auth {
  constructor () {
      this.auth0 = new auth0.WebAuth({
        domain: 'pablob.auth0.com',
        clientID: '3fyr8PD4oCt1qakKFxxVxHCRN4o2QnIF',
        redirectUri: 'http://local.pay-with-tweet.com:3000/ebook/jwt-handbook/1',
        audience: 'https://pablob.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    }); 
    
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
    

  login() {
    this.auth0.authorize();
  }
  handleAuthentication(callback) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        axios({
          method:'get',
          url:`${AppConfig.url}payWithTweet/${localStorage.getItem('access_token')}/${localStorage.getItem('id_token')}`,
          responseType:'stream'
        }).then( (response) => {
          callback();
        });
      } else if (err) {
        console.log(err);
      }
    });
    
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}