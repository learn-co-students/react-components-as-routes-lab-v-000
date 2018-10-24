import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navbar">
    <NavLink
    to="/"
    exact
    activeStyle={{
      background: 'lightpink'
    }}
    >Home</NavLink>
  <NavLink
    to="/movies"
    exact
    activeStyle={{
      background: 'lightpink'
    }}
    >Movies</NavLink>
    <NavLink
    to="/directors"
    exact
    activeStyle={{
      background: 'lightpink'
    }}
    >Directors</NavLink>
    <NavLink
    to="/actors"
    exact
    activeStyle={{
      background: 'lightpink'
    }}
    >Actors</NavLink>
</div>

  );
};



export default NavBar;
