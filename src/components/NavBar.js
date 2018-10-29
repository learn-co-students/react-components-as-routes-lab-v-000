//import React, { Component } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';


// class NavBar extends Component {
//   render() {
//     return (
//       <div className="navbar">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/movies">Movies</NavLink>
//         <NavLink to="/directors">Directors</NavLink>
//         <NavLink to="/actors">Actors</NavLink>
//       </div>
//     );
//   };
// }

// export default Navbar;

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <span>    </span>
      <NavLink to="/movies" exact>Movies</NavLink>
      <span>    </span>
      <NavLink to="/directors" exact>Directors</NavLink>
      <span>    </span>
      <NavLink to="/actors" exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;

