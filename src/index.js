import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './Routes';

render (
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
