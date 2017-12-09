'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-container-header">
          <a href="/">
            <img src="/img/auth0-logo.png" />
            <h1>Ebook pay with tweet application</h1>  
          </a>
          
        </header>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
