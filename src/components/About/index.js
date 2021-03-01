import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import josh from './../../images/josh.jpg';
import aboutbottom from './../../images/aboutbottom.png';
class About extends Component {




  render () {


    return (

      <div>
      <div id="test">
        <div className="top-div">
        <div className="mobile-left-photo d-block d-sm-none">
          <img src={josh}/>
        </div>

          <a className="d-none d-md-block" href="https://www.facebook.com/str8jacketphotography" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a className="d-none d-md-block" href="https://www.instagram.com/str8jacketphotographyandfilm/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a className="d-none d-md-block" href="https://www.youtube.com/channel/UCuWvbfr5VQBA0QsgBMS5JEQ" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
          <a className="d-none d-md-block" href="https://www.pinterest.com/joshlaniermusic/_saved/" target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest-p"></i></a>
        </div>

          <div className="about-div">

            <div className="left-photo d-none d-md-block">
              <img src={josh}/>
            </div>
            <div className="bio-box d-none d-md-block">
             <h3 className="theshort">The Short</h3>
             <p className="short-bio">
             Josh Lanier is a photographer based out of Greenville, SC.  He loves working with natural light to
             capture all the best moments and bringing the imagination of what is visualized to life. You will find him at a
             local coffee shop working on edits and enjoying a cup of coffee. <a className="short-a" to="/contact">Contact Now</a>

             </p>
          </div>

        </div>

        <div className="historydiv d-block d-sm-none">
          <div className="historybio">
          <h3 className="history">History</h3>
          <div className="mobile-p-div">

          <p className="mobile-p">
          Josh Lanier was born in North Carolina where he grew up in a musical family.  In 2004, Josh began to
          play and travel with bands and in 2008 he became a full-time touring musician. While on the road, he bought a camera to
          document his music adventures.  Josh fell in love with capturing his favorite moments behind the lens of his camera and he wanted to share his love
           for it with others. In 2013, Josh created a photography company called Str8Jacket, where he began freelance shooting.  Josh came off the road in 2014
           to marry his wife Allie and now lives with her and his daughter in the Greenville area where he continues running
           Str8jacket. Josh has a natural gift for creativity and loves diving into it with whatever project he is involved with.
          </p>
          </div>
          </div>
        </div>
        <div className="longbio-div d-none d-md-block">

          <div className="long-p-div">
            <h3 className="the-long">The Long</h3>
            <p className="long-p">Josh Lanier was born in North Carolina where he grew up in a musical family.  In 2004, Josh began to
            play and travel with bands and in 2008 he became a full-time touring musician. While on the road, he bought a camera to
            document his music adventures.  Josh fell in love with capturing his favorite moments behind the lens of his camera and he wanted to share his love
             for it with others. In 2013, Josh created a photography company called Str8Jacket, where he began freelance shooting.  Josh came off the road in 2014
             to marry his wife Allie and now lives with her and his daughter in the Greenville area where he continues running
             Str8jacket. Josh has a natural gift for creativity and loves diving into it with whatever project he is involved with.
             </p>
          </div>

        </div>
        <div className="camera ">
        <img src={aboutbottom}/>
        </div>
      </div>
      </div>
    );
}
}
export default About;
