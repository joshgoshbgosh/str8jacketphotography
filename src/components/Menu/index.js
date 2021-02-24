import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import str8jacket  from './../../images/str8jacket.png';
import './index.css';

class Menu extends Component {
  render (){
    return (

      <div>
      <div className="d-block d-sm-none">
      <div className="nav-menu">
       <a href="str8jacketphotography/"><img src={str8jacket}/></a>
       <a href="str8jacketphotography/#/gallery">GALLERY</a>
       <a href="str8jacketphotography/#/about">ABOUT</a>
       <a href="str8jacketphotography/#/contact">CONTACT</a>
       </div>
      </div>
      </div>
    );
  }
}
export default Menu;
