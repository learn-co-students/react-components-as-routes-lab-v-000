import React from 'react';
import { NavLink } from 'react-router-dom';
// This component needs to render 4 <NavLink> components. They will be for /, /movies, /directors, /actors <-- in this order(test checks for this).

const NavBar = () => {
  return (
    // <div className="navbar">
    //   {["/",'/movies','/actors','/directors'].map(link => (
    //     <li>
    //       <NavLink
    //         to={link}
    //         exact
    //         style={{textTransform: "capitalize"}}
    //         >
    //         {link === '/' ? "Home" : link.slice(1)}
    //       </NavLink>
    //     </li>
    //   ))}
    // </div>

    <div className="navbar">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/movies">Movies</NavLink></li>
      <li><NavLink to="/directors">Directors</NavLink></li>
      <li><NavLink to="/actors">Actors</NavLink></li>
    </div>

  );
};

export default NavBar;
