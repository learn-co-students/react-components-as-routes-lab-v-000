import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
      <li><NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
      background: 'darkblue'
      }}
      >Home</NavLink></li>

      <li><NavLink
      to='/movies'
      exact
      style={link}
      activeStyle={{
      background: 'darkblue'
      }}
      >Movies</NavLink></li>  

      <li><NavLink
      to='/directors'
      exact
      style={link}
      activeStyle={{
      background: 'darkblue'
      }}
      >Directors</NavLink></li>

      <li><NavLink
      to='/actors'
      exact
      style={link}
      activeStyle={{
      background: 'darkblue'
      }}
      >Actors</NavLink></li>
      </ul>
    </div>  
  );
};    
    
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    }
  
export default NavBar;
