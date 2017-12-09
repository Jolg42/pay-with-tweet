import React from 'react';
export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
           Pay with a tweet application
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Here goes the footer
          </p>
        </footer>
      </div>
    );
  }
}