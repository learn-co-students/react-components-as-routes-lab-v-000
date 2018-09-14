import React from 'react';
import { NavLink } from 'react-router-dom';

/* Styling for NavLinks */
const link = {
  width: '100px',
  padding: '10px',
  margin: '5px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{background: 'darkblue'}}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{background: 'darkblue'}}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{background: 'darkblue'}}>Actors</NavLink>            
    </div>
  );
};

export default NavBar;
