import React from 'react';
import './BottomSection.css';

function BottomSection() {
  return (
    <footer className="bottom-section">
      <div className="footer-column">
        <h3>CUSTOMER SUPPORT</h3>
        <ul>
          <li>Book Online</li>
          <li>Cancel Booking</li>
          <li>Customer Care</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>TURF-KING</h3>
        <ul>
          <li>About Us</li>
          <li>Press</li>
          <li>We Are Hiring</li>
          <li>Contact Us</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>KEEP PLAYING</h3>
        <form>
          <label htmlFor="newsletter-email">Subscribe To Newsletter</label>
          <input type="email" id="newsletter-email" placeholder="Enter your Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-column">
        <h3>FOR BUSINESSES</h3>
        <ul>
          <li>How This Works</li>
          <li>Add A Ground</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>FOR SPORTS BRANDS</h3>
        <ul>
          <li>Advertise With Us</li>
          <li>Partnerships Form</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>PAYMENT METHODS</h3>
      </div>
    </footer>
  );
}

export default BottomSection;
