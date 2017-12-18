import React from 'react';
import AppConfig from '../data/config';
import axios from 'axios';
import TwitterLogin from 'react-twitter-auth';

export default class EbookContentsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {shared: false, downloaded: false };  
    }

    payTweet () {
        axios({
            method:'get',
            url:`${AppConfig.url}generateDownload`,
            responseType:'stream',
          }).then( (response) => {
              console.log(this.props);
              this.props.downloadLink = response.data.link;
              this.setState({shared: true});
          });
    }

    onSuccess(response) {
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
          if (token) {
            this.payTweet();  
          }
        });
      };
    
    onFailed (error) {
        alert(error);
     };

    render() {
        let downloadLink = '';
        if (this.state.shared) {
            downloadLink = ( 
                <div className="payment-download-wrapper">
                    <a href={this.props.downloadLink}>Download</a>
                </div>
            );    
        } else {
            downloadLink = (
                <TwitterLogin className="twitter-btn" loginUrl={`http://local.pay-with-tweet.com:3000/auth/twitter/${this.props.id}/`}
                      onFailure={this.onFailed} onSuccess={this.onSuccess.bind(this)}
                      requestTokenUrl="http://local.pay-with-tweet.com:3000/auth/twitter/reverse"/>
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