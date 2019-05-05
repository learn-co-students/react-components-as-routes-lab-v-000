import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  color: 'blue',
  textDecoration: 'underline'
}
const NavBar = () => {
  return (
    <div>
    <NavLink to="/" exact style={link} activeStyle={{ color: 'red'}}>Home </NavLink>
    <NavLink to="/movies" exact style={link} activeStyle={{ color: 'red'}}>Movies</NavLink>
    <NavLink to="/directors" exact style={link} activeStyle={{ color: 'red'}}>Directors</NavLink>
    <NavLink to="/actors" exact style={link} activeStyle={{ color: 'red'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
