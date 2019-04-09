import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className= "navbar">
      <NavLink
        to="/">Home</NavLink>
        <NavLink
          to="/movies">Movies</NavLink>
          <NavLink
            to="/actors">Actors</NavLink>
            <NavLink
              to="/directors">Directors</NavLink>
    </div>
  );
};

export default NavBar;

// 1) wraps content in a div with .navbar class
//  navlinks
//    2) renders a Home <NavLink>
//    3) renders a Movies <NavLink>
//    4) renders an Actors <NavLink>
//    5) renders a Directors <NavLink>
