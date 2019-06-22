import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'yellow',
}


const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink to="/" exact style={link} activeStlye={{background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/movies" exact style={link} activeStlye={{background: 'darkblue' }}>Movies</NavLink>
    <NavLink to="/directors" exact style={link} activeStlye={{background: 'darkblue' }}>Directors</NavLink>
    <NavLink to="/actors" exact style={link} activeStlye={{background: 'darkblue' }}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
