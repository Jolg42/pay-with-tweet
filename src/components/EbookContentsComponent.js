'use strict';
import React from 'react';
import PaymentComponent from './PaymentComponent';
export default class EbookContentsComponent extends React.Component {
    render() {
        return (
            <div className="ebook-contents">
                <p className="ebook-contents-description">{this.props.content}</p>
                <a href="#" className="ebook-contens-link-toc" >Contents</a>
                <PaymentComponent id={this.props.id} title={this.props.title} version={this.props.version} downloadLink='' />
                <div className="ebook-contents-instructions">
                </div>
            </div>
        )
    }
};