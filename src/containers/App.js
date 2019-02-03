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
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/actors" component={Actors} />
      </div>
    </Router>
  );
};

export default App;

/*
// index.js file loads App as the top-level component
// App component already contains a Router wrapper where we'll include our particular routes. 
// App should render our NavBar and 4 React Router Route components 
// with paths to "/", "/movies", "/directors" & "/actors" and has a props of the corresponding component. 
// When a user visits the root url, they should see the Home component. 
// Since a Router wrapper can only wrap one element, use a <div> to wrap the rendering of NavBar and Route components 
// This allows us to apply a CSS class at the App component level.
*/