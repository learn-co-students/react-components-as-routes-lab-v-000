import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  fontFamily: 'sans-serif',
  background: '#DDD',
  color: 'white',
  textDecoration: 'none',
  width: '80px',
  padding: '10px',
  margin: '0 5px 5px',
}

const activeLink = {
  background: 'orange'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" style={link} activeStyle={activeLink}>Home</NavLink>
      <NavLink exact to="/movies" style={link} activeStyle={activeLink}>Movies</NavLink>
      <NavLink exact to="/actors" style={link} activeStyle={activeLink}>Actors</NavLink>
      <NavLink exact to="/directors" style={link} activeStyle={activeLink}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
