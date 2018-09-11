import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lavender',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
    <NavLink
    to="/"
    style={link}
    activeStyle={{
      background: 'grey'
    }}
  >Home</NavLink>
  <NavLink
    to="/movies"
    exact
    style={link}
    activeStyle={{
      background: 'grey'
    }}
    >Movies</NavLink>
  <NavLink
    to="/directors"
    exact
    style={link}
    activeStyle={{
      background: 'grey'
    }}
    >Directors</NavLink>
    <NavLink
      to="/actors"
      exact
      style={link}
      activeStyle={{
        background: 'grey'
      }}
    >Actors</NavLink>
    </div>
  );
};

export default NavBar;
