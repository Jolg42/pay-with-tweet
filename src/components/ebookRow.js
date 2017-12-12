import React from 'react';
import { Link } from 'react-router';
export default class EbookRow extends React.Component {
 
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }

    render() {
      return (
        <tr className="ebook-row">
            <td className="ebook-id">{this.props.id}</td>
            <td className="ebook-name"><Link to={`/ebook/${this.slugify(this.props.name)}/${this.props.id}`} >{this.props.name}</Link></td>
            <td className="ebook-author">{this.props.author}</td>
        </tr>      
      );
    }
}