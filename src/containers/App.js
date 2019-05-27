import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
    <React.Fragment>
      <Route path="/" component={Home} />
      <Route path="/Actors" component={Actors} />
      <Route path="/Directors" component={Directors} />
      <Route path="/Movies" component={Movies} />
    </React.Fragment>
    </Router>
  );
};


export default App
