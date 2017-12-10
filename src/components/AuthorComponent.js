'use strict';
import React from 'react';

export default class AuthorComponent extends React.Component {
    render() {
        return (
            <div className="author">
                <h2 className="author-title">About the author</h2>
                <img className="author-picture" src={this.props.picture} />
                <p className="author-about">{this.props.about}</p>
                <div className="author-followtwitter">
                    <span>Follow him on <img src="/img/twitter-round.png" /></span>
                </div>
            </div>
        )
    }
};