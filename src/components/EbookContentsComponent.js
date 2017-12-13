'use strict';
import React from 'react';
import PaymentComponent from './PaymentComponent';
import TocComponent from './TocComponent';
export default class EbookContentsComponent extends React.Component {
    render() {
        return (
            <div className="ebook-contents right-container">
                <p className="ebook-contents-paragraph ebook-contents-summary">{this.props.summary}</p>
                <p className="ebook-contents-paragraph ebook-contents-description">{this.props.content}</p>
                <TocComponent 
                    title={this.props.title}
                    version={this.props.version}
                    author={this.props.author}
                    toc={this.props.toc}
                />
                <PaymentComponent id={this.props.id} title={this.props.title} version={this.props.version} downloadLink='' />
                <hr className="content-separator"/>
                <p className="ebook-contents-paragraph ebook-contents-instructions">{this.props.instructions}</p>

            </div>
        )
    }
};