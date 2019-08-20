import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact><li>Home</li></NavLink>
      <NavLink to="/movies" exact><li>Movies</li></NavLink>
      <NavLink to="/directors" exact><li>Directors</li></NavLink>
      <NavLink to="/actors" exact><li>Actors</li></NavLink>
    </div>
  );
};

export default NavBar;
