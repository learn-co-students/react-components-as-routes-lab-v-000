import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
  width: '150px',
  padding: '4px',
  margin: '4px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  lineHeight: '26px'
}
  return (
    <div className="navbar">
    <ul>
      <li><NavLink to="/" exact={true} style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink></li>
      <li><NavLink to="/movies" exact={true} style={link} activeStyle={{
        background: 'darkblue'
      }}>Movies</NavLink></li>
      <li><NavLink to="/directors" exact={true} style={link} activeStyle={{
        background: 'darkblue'
      }}>Directors</NavLink></li>
      <li><NavLink to="/actors" exact={true} style={link} activeStyle={{
        background: 'darkblue'
      }}>Actors</NavLink></li>
     </ul>
    </div>

  );
};

export default NavBar;
