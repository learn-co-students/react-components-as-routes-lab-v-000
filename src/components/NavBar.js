import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
	margin: '6px',
	textDecoration: 'none'
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact 
               style={link}
      				 activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
      <NavLink to="/actors" exact
               style={link} 
               activeStyle={{fontWeight: 'bold'}}>Actors</NavLink>
      <NavLink to="/directors" exact 
               style={link}
               activeStyle={{fontWeight: 'bold'}}>Directors</NavLink>
      <NavLink to="/movies" exact
               style={link} 
               activeStyle={{fontWeight: 'bold'}}>Movies</NavLink>
    </div>
  );
};

export default NavBar;
