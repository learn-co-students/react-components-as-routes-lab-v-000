// This component needs to render 4 <NavLink> components. 
  // They will be for /, /movies, /directors, /actors <-- in this order(test checks for this).
  // NavBar
  //   ✓ wraps content in a div with .navbar class
  //   navlinks
  //     ✓ renders a Home <NavLink>
  //     ✓ renders a Movies <NavLink>
  //     ✓ renders an Actors <NavLink>
  //     ✓ renders a Directors <NavLink>

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
