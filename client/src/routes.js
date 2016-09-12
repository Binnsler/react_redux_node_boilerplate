import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './pages/App';
import Home from './pages/Home/index.js';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="page1" component={Page1}/>
    <Route path="page2" component={Page2}/>
  </Route>
);
