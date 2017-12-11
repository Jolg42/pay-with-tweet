'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout.js';
import IndexPage from './components/IndexPage.js';
import EbookPage from './components/EbookPage.js';
import NotFoundPage from './components/NotFoundPage.js';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="ebook/:id" component={EbookPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
