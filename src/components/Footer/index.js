import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Footer extends Component {

  render() {
    return(

      <div>
      <footer>
      <div className="footdiv">
      <p className="str8jacket-footer">
      STR<span className="eight">8</span>JACKET PHOTOGRAPHY
      </p>

    <a href="https://joshgoshbgosh.github.io/" target="_blank" rel="noopener noreferrer"><p className="jlanier">
     JOSH LANIER
      </p></a>
      </div>
      </footer>

      </div>
    );
  }

}
export default Footer;
