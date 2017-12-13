import React from 'react';
import { Link } from 'react-router';
import Ebooks from '../data/Ebooks';
import AuthorComponent from './AuthorComponent';
import EbookPreviewComponent from './EbookPreviewComponent';
import EbookSummaryComponent from './EbookSummaryComponent';
import EbookContentsComponent from './EbookContentsComponent'
export default class EbookPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const currentEbook = Ebooks.find((item) => {
      return item.id == id;
    });
    return (
      <div className="ebook-page-main">
        <EbookSummaryComponent 
          title={currentEbook.name}
          version={currentEbook.version}
          author={currentEbook.author}
        />
        <EbookPreviewComponent 
          picture={currentEbook.ebookPicture}
        />
        <EbookContentsComponent 
          summary={currentEbook.summary}
          content={currentEbook.description}
          id={currentEbook.id}
          title={currentEbook.name}
          version={currentEbook.version}
          author={currentEbook.author}
          toc={currentEbook.toc}
          instructions={currentEbook.instructions}
        />
        <AuthorComponent 
          about={currentEbook.aboutAuthor} 
          picture={currentEbook.authorPicture}
          twitterAccount={currentEbook.authorTwitterAccount}
        />  
      </div>
    );
  }
}
