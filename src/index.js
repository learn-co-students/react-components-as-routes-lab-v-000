import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './Routes';

/**
  TODO: move all Route tags to ./Routes.js
*/

import Actors from './components/Actors';
import App from './components/App';
import Directors from './components/Directors';
import Home from './components/Home';
import Movies from './components/Movies';

render (
  <Router history={browserHistory}>
  routes={routes}
  </Router>,
  document.getElementById('root')
);
