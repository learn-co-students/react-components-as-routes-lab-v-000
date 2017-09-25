import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
import * as testData from '../data.js';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={Home} />
        <Route exact path='/movies'    render={(props) => (<Movies    {...props} movies={testData.movies} />)} />
        <Route exact path='/directors' render={(props) => (<Directors {...props} directors={testData.directors} />)} />
        <Route exact path='/actors'    render={(props) => (<Actors    {...props} actors={testData.actors} />)} />
      </div>
    </Router>
  );
};

export default App
