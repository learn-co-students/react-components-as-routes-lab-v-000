import React from 'react';
import { NavLink } from 'react-router-dom';



const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'light blue',
  textDecoration: 'overline',
  color: 'darkblue'
}


const NavBar = () => {
  return (
    <div className="navbar" >
      <NavLink 
        to="/"
        exact
        style={link}
      
        activeStyle={{
          background: 'lightblue'
        }}
      >Home</NavLink>
      <NavLink 
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'lightblue'
        }}
      >About</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'pink'
        }}
      >Actors</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Directors</NavLink>
    </div>
  );
};


export default NavBar;
