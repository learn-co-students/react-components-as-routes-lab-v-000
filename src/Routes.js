import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Movies from './components/Movies';
import Actors from './components/Actors';
import Directors from './components/Directors';


export default (
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
    </Route>
);
