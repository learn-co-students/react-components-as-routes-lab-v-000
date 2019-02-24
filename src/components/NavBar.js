import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/movies">Movies</NavLink>
  <NavLink to="/directors">Directors</NavLink>
  <NavLink to="/actors">Actors</NavLink>
</div>
    // <div className="navbar">
    // <NavLink
    //   to="/"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Home</NavLink> //end of home
    // <NavLink
    //   to="/movies"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Movies</NavLink> // end of movies
    // <NavLink
    //   to="/directors"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Directors</NavLink>
    // <NavLink
    //   to="/actors"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Actors</NavLink>
//  </div>

  );
};

export default NavBar;
