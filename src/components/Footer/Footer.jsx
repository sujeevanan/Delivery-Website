import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          {/* <img src={assets.logo} alt="logo" className="logo" /> */}
          <h2 className="logo">Cafeteria</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam
            sit sequi voluptatibus accusantium nisi laboriosam iste optio
            assumenda odit libero laborum porro, recusandae nobis doloribus
            eaque. Voluptatem, cumque iusto?
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch!!!</h2>
          <ul>
            <li>+94 76 31 27 299</li>
            <li>lsujee2000@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p>Copyright 2024 Tomato.com -All Rights reserved</p>
    </div>
  );
};

export default Footer;
