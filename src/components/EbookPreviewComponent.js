'use strict';
import React from 'react';

export default class EbookPreviewComponent extends React.Component {
    render() {
        return (
            <div className="ebook-thumb-wrapper">
                <img src={this.props.picture} />
            </div>
        );
    }
};