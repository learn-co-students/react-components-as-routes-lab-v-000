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
  const Navbar = () => {
    
  <div>
  <NavLink
  to='/'
  exact
  style={link}
  activeStyle={{
    background: 'darkblue'
  }}
  >Home</NavLink>

<NavLink
    to="/movies"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
    >Movies</NavLink>

<NavLink
    to="/directors"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
    >Directors</NavLink>

<NavLink
    to="/actors"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
    >Actors</NavLink>

 </div>
   const Home = () => <h1> I am Home Now </h1>;
   const Movies = () => <h1> Movies Page</h1>;
     
     <div> 
       <p> Movies Title </p>
       <p> Time </p>
          <ul> 
                <li> Genre </li>

          </ul>
      </div>
    
   const Directors = () =>  <h1>Directors Page </h1>;
        <div> 
              <p> Director's Name </p>
            <ul> 
                  <li> Each Movies </li>

            </ul>
          
        </div>
   const Actors = () => <h1> Actors Page</h1>;
      <div> 
            <p> Actor name </p>
        <ul> 
          <li> Actor Movies </li>

        </ul>
      </div>
  };

  return (
    <Router>
      <React.Fragment>
      {/*{code here}*/}

    <Route exact path="/" component={Home} />
    <Route exact path="/movies" render={Movies} />
    <Route exact path="/directors" render={Directors} />
    <Route exact path="/actors" render={Actors} />

      </React.Fragment>        
    </Router>
  );
 
};

export default App
