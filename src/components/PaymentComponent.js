'use strict';
import React from 'react';
import AppConfig from '../data/config';
import {ShareButtons} from 'react-share';
import axios from 'axios';
const { TwitterShareButton } = ShareButtons;
export default class EbookContentsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {shared: false, downloaded: false };
    }

    afterSharedTweet () {
        axios({
            method:'get',
            url:`${AppConfig.url}generateDownload/${this.props.id}`,
            responseType:'stream'
          }).then( (response) => {
              console.log(this.props);
              this.props.downloadLink = response.data.link;
              this.setState({shared: true});
          });
    }

    render() {
        const tweetPlaceholder = `I just downloaded ${this.props.title} 📖 by @auth0. ${this.props.version}. Check it out!`;
        const tweetUrl = `${AppConfig.url}ebook/${this.props.id}`;
        let downloadLink = '';
        if (this.state.shared) {
            downloadLink = ( 
                <div className="payment-download-wrapper">
                    <a href={this.props.downloadLink}>Download</a>
                </div>
            );    
        } else {
            downloadLink = (
                <TwitterShareButton 
                    url={tweetUrl} 
                    title={tweetPlaceholder}
                    onShareWindowClose={this.afterSharedTweet.bind(this)}
                >
                    <span> Pay with tweet</span>
                </TwitterShareButton>
            )
        }     
        return (

            <div className="payment">
                { downloadLink }
                <div className="emailDownload"><span>Download via email</span></div>
            </div>
        )
    }
};