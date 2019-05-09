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

// App should render our Navbar and 4 React Router Route components with paths to /, /movies, /directors & /actors and has a props of the corresponding component.

// Since a Router wrapper can only wrap one element, use a div to wrap the Navbar and routes.

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

export default App
