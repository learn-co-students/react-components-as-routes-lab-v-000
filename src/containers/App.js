import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Home from '../components/Home';
import Movies from '../components/Movies';
import NavBar from '../components/NavBar';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
      </div>
    </Router>
  );
};

export default App;
