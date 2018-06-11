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
import {actors, directors, movies} from '../data'


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path ='/' component={Home}/>
        <Route exact path='/movies' render={(props) => <Movies movies={movies} {...props}/>}/>
        <Route exact path='/directors' render={(props)=> <Directors directors={directors} {...props}/>}/>
        <Route exact path='/actors' render={(props)=> <Actors actors={actors} {...props}/>}/>
      </div>
    </Router>
  );
};

export default App
