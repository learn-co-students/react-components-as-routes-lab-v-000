import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add prop for activeStyle */
          activeStyle={{
            color: 'gold'
          }}
        >Home</NavLink></li>
        <li><NavLink
          to="/movies"
          exact
          activeStyle={{
            color: 'gold'
          }}
        >Movies</NavLink></li>
        <li><NavLink
          to="/directors"
          exact
          activeStyle={{
            color: 'gold'
          }}
        >Directors</NavLink></li>
        <li><NavLink
          to="/actors"
          exact
          activeStyle={{
            color: 'gold'
          }}
        >Actors</NavLink></li>
        </ul>
    </div>
  );
};

export default NavBar;
