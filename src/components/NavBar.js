import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'red',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink>_
      <NavLink exact activeStyle={activeStyle} to="/movies">Movies</NavLink>_
      <NavLink exact activeStyle={activeStyle} to="/directors">Directors</NavLink>_
      <NavLink exact activeStyle={activeStyle} to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
