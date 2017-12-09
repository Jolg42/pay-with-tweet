import React from 'react';
import {EbookRow} from './ebookRow';
import {ebooks} from '../data/ebooks';

export default class EbooksTable extends React.Component {
    render() {
        return (
            <div className="ebook-table">
                {ebooks.map(ebook => <EbookRow name={ebook.name} />)}
            </div>
        );
    }
}   