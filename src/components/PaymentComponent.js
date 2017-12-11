'use strict';
import DownloadLink from './DownloadLink.js';
import React from 'react';
import {ShareButtons} from 'react-share';
const { TwitterShareButton } = ShareButtons;
export default class EbookContentsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {shared: false };
    }

    afterSharedTweet () {
        this.setState({shared: true});
    }

    render() {
        const tweetPlaceholder = `I just downloaded ${this.props.title} 📖 by @auth0. ${this.props.version}. Check it out!`;
        const tweetUrl = `http://localhost:3000/ebook/${this.props.id}`;
        let downloadlink = '';
        return (
            <div className="payment">
                <TwitterShareButton 
                     url={tweetUrl} 
                     title={tweetPlaceholder}
                     onShareWindowClose={this.afterSharedTweet.bind(this)}
                >
                    <span> Pay with tweet</span>
                </TwitterShareButton>
                <button>Download via email</button>
                {this.state.shared && <DownloadLink />}
            </div>
        )
    }
};