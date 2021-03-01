import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import str8jacket  from './../../images/str8jacket.png';
import './index.css';

class Menu extends Component {
  render (){
    return (

      <div>
      <div className="d-block d-sm-none">
      <div className="nav-menu">
      <Nav className="mob-menu">
       <NavLink className="moblink"to="/"><img src={str8jacket}/></NavLink>
       <NavLink className="moblink"to="/gallery">GALLERY</NavLink>
       <NavLink className="moblink"to="/about">ABOUT</NavLink>
       <NavLink className="moblink"to="/contact">CONTACT</NavLink>
       </Nav>
       </div>
      </div>
      </div>
    );
  }
}
export default Menu;
