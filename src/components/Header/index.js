import React from 'react';
import { NavLink } from 'react-router-dom';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import str8jacket from './../../images/str8jacket.png';

import './index.css';

function Header(props){
  return(
    <header className="d-none d-md-block">
    <Navbar collapseOnSelect expand="lg" variant="dark">

    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
    <Navbar.Collapse id="responsive-navbar-nav" >

        <Nav>
          <NavLink className="nav-link nav-home" to='/'>HOME</NavLink>
          <NavLink className="nav-link nav-gallery" to='/gallery'>GALLERY</NavLink>
        </Nav>
        <div className="logo">
        <a className="d-none d-md-block"to="/">
        <Image src={str8jacket} rounded />
        </a>
        </div>
        <Nav>
          <NavLink className="nav-link nav-about" to='/about'>ABOUT</NavLink>
          <NavLink className="nav-link nav-contact" to='/contact'>CONTACT</NavLink>
        </Nav>


    </Navbar.Collapse>
    </Navbar>
    </header>
  );
}
export default Header;
