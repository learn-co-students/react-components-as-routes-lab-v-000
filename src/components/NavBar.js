import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <NavLink
          to="/"
          exact
          activeStyle={{
            color: 'darkblue'
          }}
        >Home</NavLink>
      </li>
      
      <li>
        <NavLink
          to="/movies"
          exact
          activeStyle={{
            color: 'darkblue'
          }}
        >Movies</NavLink>
      </li>
    
      <li>
        <NavLink
          to="/directors"
          exact
          activeStyle={{
            color: 'darkblue'
          }}
        >Directors</NavLink>
      </li>
    
      <li>
        <NavLink
          to="/actors"
          exact
          activeStyle={{
            color: 'darkblue'
          }}
        >Actors</NavLink>
      </li>
    
    </div>
  );
};

export default NavBar;
