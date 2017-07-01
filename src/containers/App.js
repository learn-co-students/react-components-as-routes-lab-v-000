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
      <NavBar />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/actors" render={() => <h1>About</h1>} />
      <Route exact path="/directors" render={() => <h1>Directors</h1>} />
      <Route exact path="/movies" render={() => <h1>Movies</h1>} />

    </Router>
  );
};

export default App
