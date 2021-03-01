import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import './index.css';


class Gallery extends Component {



  render() {



  return (
    <div>
    <div id="test">
      <div className="gal-top-div d-none d-md-block">
      </div>
      <div className="borderline-top d-none d-md-block">
      </div>
      <div className="gallery-div d-none d-md-block">
        <p>GALLERY</p>
      </div>
      <div className="undergalborder d-none d-md-block">
      </div>
      <div className="mobile-under-menu-div d-block d-sm-none">


      </div>
      <div className="mobile-top-div d-block d-sm-none">
        <p>GALLERY</p>
      </div>
      <div className="mobile-undergal-div d-block d-sm-none">
      </div>
      <div className="mobile-out-pic-div ">
      <div className="mobile-gal-div d-block d-sm-none">
      <Nav>
      <NavLink className="mobile-galdiv-atag"to="/photography"><div className="mobile-photo-gal-div">
        <p className="mobile-pic-gal-div">PHOTOGRAPHY</p>
      </div></NavLink></Nav>
      </div>
      </div>

      <div className="mobile-out-div ">
      <div className="mobile-gal-vid-div d-block d-sm-none">
      <Nav className="mobile-galdiv-atag">
      <NavLink className="mobile-galdiv-atag"to="/videography"><div className="mobile-video-div">
        <p classname="mobile-video-div">VIDEOGRAPHY</p>
      </div></NavLink></Nav>
      </div>
      </div>

      <div className=" extra-div d-none d-md-block">
      <div className="galdiv">
        <Nav>
        <NavLink className="galdiv-atag"to="/photography"><div className="photo-gal-div">
          <p className="pic-gal-div">PHOTOGRAPHY</p>
        </div></NavLink></Nav>
        <Nav>
        <NavLink className="galdiv-atag"to="/videography"><div className="video-div">
          <p classname="video-div">VIDEOGRAPHY</p>
        </div></NavLink></Nav>
      </div>
      </div>
      <div className="bottomgal d-none d-md-block">

      </div>
      <div className="blankdiv d-none d-md-block">

      </div>

      <div className="mobile-fontfam d-none d-md-block">


      </div>
      <div className="mbottom-div d-block d-sm-none">
      </div>
      <div className="munderbottom-div d-block d-sm-none">
      </div>
      </div>
    </div>
  );
}
}
export default Gallery;
