import React from 'react';

export default class EbookSummaryComponent extends React.Component {
    render() {
        return (
            <div className="ebook-summary right-container">
                <h2 className="ebook-summary-title">{this.props.title}</h2>
                <span className="ebook-summary-author">Written by {this.props.author}</span>
                <span className="ebook-summary-version"><img src="/img/ebook-icon.png" /> Ebook version {this.props.version}</span>
            </div>
        );
    }
};