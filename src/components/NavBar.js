import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"
      exact
      activeStyle={{
      background: 'lightblue'
      }}
      >Home</NavLink>
      <NavLink to="/movies"
      exact
      activeStyle={{
      background: 'lightblue'
      }}
      >Movies</NavLink>
      <NavLink to="/directors"
      exact
      activeStyle={{
      background: 'lightblue'
      }}
      >Directors</NavLink>
      <NavLink to="/actors"
      exact
      activeStyle={{
      background: 'lightblue'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
