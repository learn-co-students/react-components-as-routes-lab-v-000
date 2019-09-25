import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import {BrowserRoutes as Routes, Route, NavLink} from 'react-router-dom'


render (
  <App />,
  document.getElementById('root')
);
