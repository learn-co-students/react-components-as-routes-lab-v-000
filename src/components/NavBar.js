import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  // width: '100px',
  // padding: '12px',
  // margin: '0 6px 6px',
  // background: '',
  // textDecoration: 'none',
  color: 'blue',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink
          to='/' exact style={link} activeStyle={{color: 'lightblue'}}>
          Home
        </NavLink></li>
        <li><NavLink
          to='/movies' exact style={link} activeStyle={{color: 'lightblue'}}>
          Movies
        </NavLink></li>
        <li><NavLink
          to='/directors' exact style={link} activeStyle={{color: 'lightblue'}}>
          Directors
        </NavLink></li>
        <li><NavLink
          to='/actors' exact style={link} activeStyle={{color: 'lightblue'}}>
          Actors
        </NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
