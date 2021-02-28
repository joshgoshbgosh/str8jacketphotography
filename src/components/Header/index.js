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
          <NavLink className="nav-link nav-home" href='/'>HOME</NavLink>
          <NavLink className="nav-link nav-gallery" href='/#/gallery'>GALLERY</NavLink>
        </Nav>
        <div className="logo">
        <a className="d-none d-md-block"href="/">
        <Image src={str8jacket} rounded />
        </a>
        </div>
        <Nav>
          <NavLink className="nav-link nav-about" href='/#/about'>ABOUT</NavLink>
          <NavLink className="nav-link nav-contact" href='/#/contact'>CONTACT</NavLink>
        </Nav>


    </Navbar.Collapse>
    </Navbar>
    </header>
  );
}
export default Header;
