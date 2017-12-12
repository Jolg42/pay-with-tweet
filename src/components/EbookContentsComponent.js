'use strict';
import React from 'react';
import PaymentComponent from './PaymentComponent';
export default class EbookContentsComponent extends React.Component {
    render() {
        return (
            <div className="ebook-contents">
                <p className="ebook-contents-paragraph ebook-contents-summary">{this.props.summary}</p>
                <p className="ebook-contents-paragraph ebook-contents-description">{this.props.content}</p>
                <div className="ebook-contents-link-toc" >
                    <a href="#">Contents <img src="/img/arrow.png" /> </a>
                </div>    
                <PaymentComponent id={this.props.id} title={this.props.title} version={this.props.version} downloadLink='' />
                <hr className="content-separator"/>
                <p className="ebook-contents-paragraph ebook-contents-instructions">{this.props.instructions}</p>

            </div>
        )
    }
};