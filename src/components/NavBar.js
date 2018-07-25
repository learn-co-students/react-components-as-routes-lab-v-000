import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Actors from './Actors.js';
import Directors from './Directors.js';
import Movies from './Movies.js';
import Home from './Home.js'

const NavBar = () => {
  return (
  	<div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>

  );
};

export default NavBar;
