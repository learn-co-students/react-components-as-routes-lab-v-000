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
    		<React.Fragment>
    			<NavBar />
  			  	<Route extact path="/" component={Home}/>  			  		
  			  	<Route extact path="/movies" component={Movies} />  			  		
  			  	<Route extact path="/directors" component={Directors} />  			  		
  			  	<Route extact path="/actors" component={Actors} />  			  		
  			</React.Fragment>
    	</div>
    </Router>
  );
};

export default App
