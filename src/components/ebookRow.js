import React from 'react';
import { Link } from 'react-router';
export default class EbookRow extends React.Component {
    render() {
      return (
        <tr className="ebook-row">
            <td className="ebook-id">{this.props.id}</td>
            <td className="ebook-name"><Link to={`/ebook/${this.props.id}`} >{this.props.name}</Link></td>
            <td className="ebook-author">{this.props.author}</td>
        </tr>      
      );
    }
}