'use strict';
import React from 'react';

export default class AuthorComponent extends React.Component {
    render() {
        return (
            <div className="author">
                <div className="author-title" >
                    <h2 >About the author</h2>
                </div>
                <div className="author-picture">
                    <img src={this.props.picture} />
                </div>
                <p className="author-about">{this.props.about}</p>
                <div className="author-followtwitter">
                    <span>Follow him on <img src="/img/twitter-round.png" /></span>
                </div>
            </div>
        )
    }
};