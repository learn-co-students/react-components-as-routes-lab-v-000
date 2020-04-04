import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";

const NavBar = () => (
  <div className="navbar">
    <ul>
      {routes.map(({ path, exact, label }) => (
        <li key={path}>
          <NavLink to={path} exact={exact}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
