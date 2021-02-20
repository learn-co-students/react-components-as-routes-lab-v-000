import React from "react";
import Home from "./Home";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = {
    display: "block",
  };

  return (
    <div className="navbar">
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/actors" style={link}>
        Actors
      </NavLink>
      <NavLink to="/movies" style={link}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={link}>
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
