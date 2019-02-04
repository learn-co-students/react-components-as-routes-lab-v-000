import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  margin: '10px',
  textDecoration: 'none',
  color: 'green',
  padding: '5px'
}

const activeStyle = {
  background: "#eeeeee"
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"
        exact
        style={style}
        activeStyle={activeStyle}
      >Home</NavLink>
      <NavLink to="/movies"
        exact
        style={style}
        activeStyle={activeStyle}
      >Movies</NavLink>
      <NavLink to="/directors"
        exact
        style={style}
        activeStyle={activeStyle}
      >Directors</NavLink>
      <NavLink to="/actors"
        exact 
        style={style}
        activeStyle={activeStyle}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
