import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
      to="/">Home<br></br></NavLink>

    <NavLink
      to="/movies"
      activeStyle={{
        background: 'darkblue'
      }}
    >Movies<br></br></NavLink>

    <NavLink
      to="/directors"
      activeStyle={{
        background: 'darkblue'
      }}
    >Directors<br></br></NavLink>

    <NavLink
      to="/actors"
      activeStyle={{
        background: 'darkblue'
      }}
    >Actors</NavLink>
    </div>
  );
};

export default NavBar;
