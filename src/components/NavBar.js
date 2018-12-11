import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      style={props.link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/actors"
      exact
      style={props.link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Actors</NavLink>
    <NavLink
      to="/directors"
      exact
      style={props.link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Directors</NavLink>
    <NavLink
      to="/movies"
      exact
      style={props.link}
      activeStyle={{
        backgrond: 'darkblue'
      }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;
