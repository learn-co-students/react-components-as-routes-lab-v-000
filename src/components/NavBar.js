import React from 'react';
import { NavLink } from 'react-router-dom';

// const link = {
//   width: '100 px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default NavBar;
