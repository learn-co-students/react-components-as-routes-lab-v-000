import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink to="/" exact>Home</NavLink>
       <NavLink to="/movies" exact>Movies</NavLink>
       <NavLink to="/directors" exact>Directors</NavLink>
       <NavLink to="/actors" exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;
