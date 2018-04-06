import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <ul>

    <li>
	<NavLink
	  to="/"
	  exact
	  activeStyle={{
	    fontWeight: 'bold'
	   }}
	>Home</NavLink>
	</li>

	<li>
	<NavLink
	  to="/actors"
	  exact
	  activeStyle={{
	    fontWeight: 'bold'
	   }}
	>Actors</NavLink>
	</li>

	<li>
	<NavLink
	  to="/directors"
	  exact
	  activeStyle={{
	    fontWeight: 'bold'
	   }}
	>Directors</NavLink>
	</li>

	<li>
	<NavLink
	  to="/movies"
	  exact
	  activeStyle={{
	    fontWeight: 'bold'
	   }}
	>Movies</NavLink>
	</li>

	</ul>
    </div>
  );
};

export default NavBar;
