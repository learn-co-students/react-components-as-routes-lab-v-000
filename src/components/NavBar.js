import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink><hr/>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
      >Movies</NavLink><hr/>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
      >Directors</NavLink><hr/>
      <NavLink
        to="/actors"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink><hr/>
    </div>
  );
};

export default NavBar;
