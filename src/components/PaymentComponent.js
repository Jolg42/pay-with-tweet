import React from 'react';
import AppConfig from '../data/config';
import axios from 'axios';
import TwitterLogin from 'react-twitter-auth';

export default class EbookContentsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shared: false
        };  
    }
    payTweet () {
        axios({
            method:'get',
            url:`${AppConfig.url}generateDownload`,
            responseType:'stream',
          }).then( (response) => {
              console.log(this.props);
              console.log(response.data);
              this.props.downloadLink = response.data.link;
              this.setState({shared: true});
              console.log(this.state.shared);
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
        console.log('Should render');
        if (this.state.shared) {
            downloadLink = ( 
                <div className="payment-download-wrapper">
                    <a  href={this.props.downloadLink}  target="_blank" >Download</a>
                </div>
            );    
        } else {
            downloadLink = (
                <TwitterLogin className="twitter-btn" loginUrl={`${AppConfig.url}auth/twitter/${this.props.id}/`}
                      onFailure={this.onFailed} onSuccess={this.onSuccess.bind(this)}
                      requestTokenUrl={`${AppConfig.url}auth/twitter/reverse/`} 
                      text="Pay with tweet"/>
            )
        }     
        return (

            <div className="payment">
                { downloadLink }
              <div className="emailDownload" ><span>Download via email</span></div>
            </div>
        )
    }
};