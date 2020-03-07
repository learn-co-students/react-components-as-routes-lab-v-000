import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/" exact activeStyle={{background: 'green', color: 'white'}}>Home</NavLink></li>
        <li><NavLink to="/movies" exact activeStyle={{background: 'green', color: 'white'}}>Movies</NavLink></li>
        <li><NavLink to="/directors" exact activeStyle={{background: 'green', color: 'white'}}>Directors</NavLink></li>
        <li><NavLink to="/actors" exact activeStyle={{background: 'green', color: 'white'}}>Actors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
