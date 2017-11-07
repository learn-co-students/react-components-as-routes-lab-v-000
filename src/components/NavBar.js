import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    color: 'blue',
}

const NavBar = () =>
  <div className="navbar">
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          style={link}
        >Home</NavLink></li>
      <li><NavLink
        to="/movies"
        exact
        style={link}
      >Movies</NavLink></li>
      <li><NavLink
        to="/directors"
        exact
        style={link}
      >Directors</NavLink></li>
      <li><NavLink
        to="/actors"
        exact
        style={link}
      >Actors</NavLink></li>
    </ul>
  </div>

export default NavBar;
