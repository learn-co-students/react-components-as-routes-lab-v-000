import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  // const link = {
  //   color: "white",
  //   padding: "0.7em 0.84",
  //   display: "inline-block",
  //   border: "3px solid transparent",
  //   position: "relative",
  // }
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/directors">Directors</NavLink></li>
        <li><NavLink to="/actors">Actors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
