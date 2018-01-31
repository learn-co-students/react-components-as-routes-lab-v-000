import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  padding: '10px 8px',
  background: 'lightblue',
  display: 'inline-block',
  alignItems: 'center',
}

const links = {
  padding: '10px 8px',
  textDecoration: 'none',
  color: '#9168a9',
}

const NavBar = () => {
  return (
    <div className="navbar" style={navStyle}>
      <NavLink exact to="/" style={links}>Home</NavLink>
      <NavLink exact to="/actors" style={links}>Actors</NavLink>
      <NavLink exact to="/directors" style={links}>Directors</NavLink>
      <NavLink exact to="/movies" style={links}>Movies</NavLink>
    </div>
  );
};

export default NavBar;
