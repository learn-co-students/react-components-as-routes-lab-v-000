import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to='/'
      activeStyle={{
        background: 'purple'
      }}>Home</NavLink>
      <NavLink
      to='/directors'
      activeStyle={{
        background: 'purple'
      }}>Directors</NavLink>
      <NavLink
      to='/movies'
      activeStyle={{
        background: 'purple'
      }}>Movies</NavLink>
      <NavLink
      to='/actors'
      activeStyle={{
        background: 'purple'
      }}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
