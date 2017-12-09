'use strict';

import React from 'react';
import { Link } from 'react-router';
import Ebooks from '../data/Ebooks';

export default class EbookPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const currentEbook = Ebooks.find((item) => {
      return item.id == id;
    });
    return (
      <div className="ebook-page-main">
        <h2>#{currentEbook.id} {currentEbook.name}</h2>
      </div>
    );
  }
}
