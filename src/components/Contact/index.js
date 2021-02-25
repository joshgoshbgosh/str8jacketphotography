import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import contactpic from './../../images/contactpic.png';
import mobilecontact from './../../images/mobilecontact.png';
import './index.css';


class Contact extends Component {



  render() {


  return (
    <div>
      <div id="test">
      <div className="mobile-contact-word d-block d-sm-none">
        <p className="mobile-word-contact">CONTACT</p>
      </div>
      <div className="mobile-total-contact d-block d-sm-none">
        <div className="mobile-contact-greenville d-block d-sm-none">
          <p className="mobile-addressme">ADDRESS - GREENVILLE SC</p>
          <a className="mobile-contact-a"href="tel:9192190994">PHONE - (919)219-0994</a>
          <p className="mobile-emailme">EMAIL - str8jacketphotography@gmail.com</p>
        </div>
        </div>
        <div className="mobile-contactform d-block d-sm-none">
        <form action="https://getform.io/f/2123216a-c1b9-447f-aada-8a37bb615d5b" method="POST">
          <div className="mobile-infodiv d-block d-sm-none">
            <input className="mobile-input-box"type="text" placeholder="name..."name="name"/>
            <input className="mobile-input-box"type="email" placeholder="email..." name="email"/>
            <input className="mobile-input-box"type="tel" placeholder="number..."name="number"/>
            <input className="mobile-message-box"type="text" placeholder="message..."name="message"/>
          </div>
            <button className="the-button" type="submit">Send</button>


        </form>
        </div>
        <div className="mobilecontactpic d-block d-sm-none">
          <img src={mobilecontact}/>
        </div>
        <div className="contact-top-div d-none d-md-block">

        </div>
        <div className="contact-second-div">
          <div classname="contact-photo-div d-none d-md-block">
            <img className="contactphoto d-none d-md-block"src={contactpic}/>

          </div>
          <div className="contact-word d-none d-md-block">
            <p className="word-contact">CONTACT</p>
          </div>
        </div>

        <div className="contact-div-four d-none d-md-block">
        </div>
        <div className="total-contact">
          <div className="contact-greenville d-none d-md-block">
            <p className="addressme d-none d-md-block">ADDRESS - GREENVILLE SC</p>
            <p className="phoneme d-none d-md-block">PHONE - (919)219-0994</p>
            <p className="emailme d-none d-md-block">EMAIL - str8jacketphotography@gmail.com</p>
          </div>
          <div className="contactform d-none d-md-block">
          <form action="https://getform.io/f/2123216a-c1b9-447f-aada-8a37bb615d5b" method="POST">
            <div className="infodiv">
              <input className="input-box"type="text" placeholder="name..."name="name"/>
              <input className="input-box"type="email" placeholder="email..." name="email"/>
              <input className="input-box"type="tel" placeholder="number..."name="number"/>
              <input className="message-box"type="text" placeholder="message..."name="message"/>
            </div>
              <button className="the-button" type="submit">Send</button>


          </form>
          </div>
        </div>
        <div className="bottom-contact-div">
        </div>
      </div>
    </div>
  );
}
}
export default Contact;
