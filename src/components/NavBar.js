import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
     <NavLink exact to='/'>Home</NavLink><br />
     <NavLink exact to='/movies'>Movies</NavLink><br />
     <NavLink exact to='/directors'>Directors</NavLink><br />
     <NavLink exact to='/actors'>Actors</NavLink>
    </div>
  );
};

export default NavBar;
