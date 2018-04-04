import React from 'react';
import { NavLink } from 'react-router-dom';
import {Home} from './Home'
import {Actors} from './Actors.js'
import {Directors} from './Directors.js'
import {Movies} from './Movies.js'
const NavBar = () => {
  return (
    <div className="navbar">
     <NavLink to="/" >Home</NavLink>&nbsp;&nbsp;
     <NavLink to="/actors" >Actors</NavLink>&nbsp;&nbsp;
     <NavLink to="/directors">Directors</NavLink>&nbsp;&nbsp;
     <NavLink  to="/movies" >Movies</NavLink>&nbsp;&nbsp;
    </div>
  );
};

export default NavBar;
