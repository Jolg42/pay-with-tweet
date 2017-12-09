import React from 'react';
import EbookRow  from './EbookRow';
import Ebooks from '../data/Ebooks';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="ebook-list">
                <h2> Available Ebooks </h2> 
                <table className="ebook-table">
                    <thead>
                        <tr>
                            <th className="id-header" >#</th>
                            <th className="name-header">Name</th>
                            <th className="author-header">Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ebooks.map(ebook => <EbookRow key={ebook.id} id={ebook.id} name={ebook.name} author={ebook.author} />)}
                    </tbody>
                </table>    
            </div>
        );
    }
}   