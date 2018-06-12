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


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" components={Home} />
        <Route path="/actors" components={Actors} store={props.actors} />
        <Route path="/directors" components={Directors} />
        <Route path="/movies" components={Movies} />
      </div>
    </Router>
  );
};

export default App
