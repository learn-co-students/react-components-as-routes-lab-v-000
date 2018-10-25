import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li><NavLink
        to="/"
        activeStyle={{
          color: 'orange'
      }}
      >Home</NavLink></li>
      <li><NavLink
        to="/movies"
        activeStyle={{
          color: 'orange'
      }}
      >Movies</NavLink></li>
      <li><NavLink
        to="/directors"
        activeStyle={{
          color: 'orange'
      }}
      >Directors</NavLink></li>
      <li><NavLink
        to="/actors"
        activeStyle={{
          color: 'orange'
      }}
      >Actors</NavLink></li>
    </div>
  );
};

export default NavBar;
