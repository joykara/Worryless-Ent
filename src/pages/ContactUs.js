import React from 'react';
import './contact.css';
import { Footer, Navbar } from '../components';

const ContactUs = () => {

    // set up contact form email.js

  return (
    <div className="contact-container">
        <Navbar />
        <form className="contact-form">
              <h1>Contact Us</h1>

              <div className="contact-form-input">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>

              <div className="contact-form-input">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>

              {/* add a message input */}
              <div className="contact-form-input">
                <label>Message</label>
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
          <Footer />
    </div>
  )
}

export default ContactUs