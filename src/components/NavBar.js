import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link onlyActiveOnIndex to='/' activeStyle={{color:'#53acff'}} >Home</Link></li>
        <li><Link to='/movies' activeStyle={{color:'#53acff'}} >Movies</Link></li>
        <li><Link to='/directors' activeStyle={{color:'#53acff'}} >Directors</Link></li>
        <li><Link to='/actors' activeStyle={{color:'#53acff'}} >Actors</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
