import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

//navbar needs 4 routes- /, /movies, /directors, /actors w/props of corresponding components
//home should always be visible, wrap in a div
const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/actors" component={Actors} />
      </div>
    </Router>
  );
};

export default App
