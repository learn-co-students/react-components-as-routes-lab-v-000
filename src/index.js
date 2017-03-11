import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './routes';

/**
  TODO: move all Route tags to ./route.js
*/
render (
  <Router history={browserHistory}>
  
  </Router>,
  document.getElementById('root')
);
