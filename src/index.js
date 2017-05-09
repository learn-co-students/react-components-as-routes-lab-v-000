import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import myRoutes from './Routes'

// routes
import routes from './Routes';

/**
  TODO: move all Route tags to ./Routes.js
*/
render (
  <Router history={browserHistory} routes={myRoutes}></Router>,
  document.getElementById('root')
);
