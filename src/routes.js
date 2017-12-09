// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import EbooksTable from './components/ebooksTable';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={EbooksTable}/>
  </Route>
);

export default routes;