import React from 'react';
import { NavLink } from 'react-router-dom';

const navlink = {
  width: '100px',
  padding: '10px',
  margin: '0 5px 5px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink 
        to= "/"
        exact
        style={navlink}
      >Home</NavLink>
      <NavLink 
        to= "/movies"
        exact
        style={navlink}
      >Movies</NavLink>
      <NavLink 
        to= "/directors"
        exact
        style={navlink}
      >Directors</NavLink>
      <NavLink 
        to= "/actors"
        exact
        style={navlink}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
