import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import homepage  from './../../images/homepage.jpg';
import homepage2 from './../../images/homepage2.jpg';
import homepage3 from './../../images/homepage3.jpg';
import homepage4 from './../../images/homepage4.jpg';
import homepage5 from './../../images/homepage5.jpg';
import homepage6 from './../../images/homepage6.jpg';
import homepage7 from './../../images/homepage7.jpg';
import homepage8 from './../../images/homepage8.jpg';
import homepage9 from './../../images/homepage9.jpg';
import homepage10 from './../../images/homepage10.jpg';
import homepage12 from './../../images/homepage12.jpg';
import homepage17 from './../../images/homepage17.jpg';
import homepage16 from './../../images/homepage16.jpg';
import homepage15 from './../../images/homepage15.jpg';
import homepage14 from './../../images/homepage14.JPG';
import allie from './../../images/allie.jpg';


class Home extends Component {



  render() {



  return (
    <div>
    <div id="test">
      <div className="mobile-preload-images d-block d-sm-none">
        <div className="mobile-photo-div">

         </div>
      </div>
      <div className="preload-images d-none d-md-block">
        <div className="photo-div">
         </div>
      </div>
      <div className="josh-div">

        <p className="josh-p">
        I'm Josh Lanier, a photographer in Greenville, South Carolina.
        I work throughout the state and surrounding states, but I am available for long distance travel.  I love capturing
        life through a lens and creating memories that will last forever.  I photograph engagements, weddings, anniversaries, family
        events, family portraits, modeling, musicians, bands, and live shows.  If you feel a connection
        with my work, let's talk.
        </p>
        <a to="/contact">GET IN TOUCH</a>
      </div>
      <div className="photo-strip">



        <div className="left-box d-none d-md-block">
          <a to="/photography"><div className="left-photo-box">
          <p className="photo-text">
          PHOTOGRAPHY
          </p>
          <p className="seemore">SEE MORE</p>
          </div></a>
        </div>

        <div className="right-box d-none d-md-block">
          <a to="/videography"><div className="right-photo-box">
          <p className="video-text">
          VIDEOGRAPHY
          </p>
          <p className="seemore-two">SEE MORE</p>
          </div></a>
        </div>
        </div>
      <div className="socialmedia">
        <a href="https://www.facebook.com/str8jacketphotography" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/str8jacketphotographyandfilm/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCuWvbfr5VQBA0QsgBMS5JEQ" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
        <a href="https://www.pinterest.com/joshlaniermusic/_saved/" target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest-p"></i></a>
      </div>
      <div className="multiphoto">
        <img src={homepage12}/>
        <img src={homepage17}/>
        <img src={homepage16}/>
        <img src={homepage15}/>
        <img src={homepage14}/>
      </div>
      </div>
    </div>
  );
}
}
export default Home;
