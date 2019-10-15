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
      {/*{code here}*/}
      <div>
        <NavBar />
      </div>
      <div>
      <Route path="/">
        <Home />
      </Route>
      </div>
      <div>
      <Route path="/actors">
        <Actors />
      </Route>
      </div>
      <div>
      <Route path="/directors">
        <Directors />
      </Route>
      </div>
      <div>
      <Route path="/movies">
        <Movies />
      </Route>
      </div>
    </Router>
  );
};

export default App
