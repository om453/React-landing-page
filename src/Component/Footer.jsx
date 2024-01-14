import React from 'react';
import '../App.css'
import './Footer.css';
import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagram.jpeg'
import twitterIcon from '../assets/images/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are passionate about delivering the latest and trendiest athletic wear to our customers. Our mission is to inspire and empower individuals to embrace an active lifestyle, combining fashion and functionality seamlessly.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@nike.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
           <img src={facebookIcon} alt="icon" width={32} height={32} />
           <img src={instagramIcon} alt="icon"  width={32} height={32}/>
           <img src={twitterIcon} alt="icon"  width={32} height={32}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
