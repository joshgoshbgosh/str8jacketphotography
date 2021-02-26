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
          <Nav.Link className="nav-link nav-home" href='str8jacketphotography/#/'>HOME</Nav.Link>
          <Nav.Link className="nav-link nav-gallery" href='str8jacketphotography/#/gallery'>GALLERY</Nav.Link>
        </Nav>
        <div className="logo">
        <a className="d-none d-md-block"href="/#/">
        <Image src={str8jacket} rounded />
        </a>
        </div>
        <Nav>
          <Nav.Link className="nav-link nav-about" href='str8jacketphotography/#/about'>ABOUT</Nav.Link>
          <Nav.Link className="nav-link nav-contact" href='str8jacketphotography/#/contact'>CONTACT</Nav.Link>
        </Nav>


    </Navbar.Collapse>
    </Navbar>
    </header>
  );
}
export default Header;
