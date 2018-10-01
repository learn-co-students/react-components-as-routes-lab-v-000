import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle={
  width: '200px',
  height: '25px',
  background: 'blue',
  color: 'white',
  textDecoration: 'none',
  padding: '20px'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyle}
        activeStyle={{background: 'pink'}}
        >Home</NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyle}
        activeStyle={{background: 'pink'}}
        >Actors</NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyle}
        activeStyle={{background: 'pink'}}
        >Directors</NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyle}
        activeStyle={{background: 'pink'}}
        >Movies</NavLink>
    </div>
  );
};

export default NavBar;
