import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
      to="/">Home<br></br></NavLink>

      <NavLink
      to="/movies">Movies<br></br></NavLink>

      <NavLink
      to="/actors">Actors<br></br></NavLink>

      <NavLink
      to="/directors">Directors<br></br></NavLink>
    </div>
  );
};

export default NavBar;
