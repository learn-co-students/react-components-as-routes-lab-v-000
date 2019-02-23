import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/movies" component={Movies} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
