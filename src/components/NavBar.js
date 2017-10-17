import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  margin: '4px 6px 4px',
  background: 'gray',
  color: 'black',
  textDecoration: 'none',
  padding: '12px'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue', color: 'white'}}>Home</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{background: 'darkblue', color: 'white'}}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{background: 'darkblue', color: 'white'}}>Actors</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{background: 'darkblue', color: 'white'}}>Movies</NavLink>
    </div>
  );
};

export default NavBar;
