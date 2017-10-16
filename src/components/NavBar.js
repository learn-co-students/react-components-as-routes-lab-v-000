import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{
          background: 'darkgrey'
        }}
      >Home</NavLink>

      <NavLink
        to='/movies'
        exact
        style={link}
        activeStyle={{
          background: 'darkgrey'
        }}
      >Movies</NavLink>

      <NavLink
        to='/directors'
        exact
        style={link}
        activeStyle={{
          background: 'darkgrey'
        }}
      >Directors</NavLink>

      <NavLink
        to='/actors'
        exact
        style={link}
        activeStyle={{
          background: 'darkgrey'
        }}
      >Actors</NavLink>  
    </div>
  );
};

export default NavBar;