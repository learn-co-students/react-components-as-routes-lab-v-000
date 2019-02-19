import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  const links = {
    Home:"/",
    Movies:"/movies",
    Directors:"/directors",
    Actors:"/actors"
  }

  return (
    <div className="navbar">
      {Object.keys(links).map((key, i) => (
        <NavLink
          to={links[key]}
          exact
          style={link}
          activeStyle={{background:"black"}}
          key={i}>
          {key}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
