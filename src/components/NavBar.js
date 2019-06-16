import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar >
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to='/' >
            <a href="/">Home</a>
          </LinkContainer>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem componentClass={NavLink} to='/movies' href='/movies'>Movies</NavItem>
        <NavItem componentClass={NavLink} to='/directors' href='/directors'>Directors</NavItem>
        <NavItem componentClass={NavLink} to='/actors' href='/actors'>Actors</NavItem>
      </Nav>
      <Nav pullRight={true} >
        <NavDropdown eventKey={3} title="Links" id="basic-nav-dropdown" >
          <MenuItem eventKey={3.1} componentClass={NavLink} to='/' href='/'>Home</MenuItem>
          <MenuItem eventKey={3.1} componentClass={NavLink} to='/movies' href='/movies'>Movies</MenuItem>
          <MenuItem eventKey={3.1} componentClass={NavLink} to='/directors' href='/directors'>Directors</MenuItem>
          <MenuItem eventKey={3.1} componentClass={NavLink} to='/actors' href='/actors'>Actors</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
