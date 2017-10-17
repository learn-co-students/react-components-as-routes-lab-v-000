import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  background: 'blue',
  margin: '0 5px',
  padding: '5px',
  borderRadius: '5px',
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'lightblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'lightblue'
        }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'lightblue'
        }}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'lightblue'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
