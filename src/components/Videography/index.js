import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Videography extends Component {



  render() {



  return (
    <div>
    <div id="test">
    <div className="mobile-v-div">
    <iframe className="d-block d-sm-none"src="https://www.youtube.com/embed/Z23pX33p_GA">
      </iframe>
    </div>
    <div className="mobile-v-second">
    <iframe className="d-block d-sm-none"src="https://www.youtube.com/embed/aQyb3ct-slw">
    </iframe>
    </div>
    <div className="mobile-v-third">
    <iframe className="d-block d-sm-none"src="https://www.youtube.com/embed/VBo9UdGvhfA">
    </iframe>
    </div>
    <div className="mobile-v-four">
    <iframe className="d-block d-sm-none"src="https://www.youtube.com/embed/UW4H3pvUTzc">
    </iframe>
    </div>
    <div className="top-videography-div d-none d-md-block">
    </div>
      <div className="videography-div ">

        <iframe className="d-none d-md-block"src="https://www.youtube.com/embed/Z23pX33p_GA">
          </iframe>
          <iframe className="d-none d-md-block"src="https://www.youtube.com/embed/aQyb3ct-slw">
          </iframe>
      </div>
      <div className="second-videography-div ">
          <iframe className="d-none d-md-block"src="https://www.youtube.com/embed/VBo9UdGvhfA">
          </iframe>
          <iframe className="d-none d-md-block"src="https://www.youtube.com/embed/UW4H3pvUTzc">
          </iframe>
      </div>
      </div>
    </div>
  );
}
}
export default Videography;
