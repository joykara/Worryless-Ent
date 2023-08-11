import React, {useState} from 'react';
import './contact.css';
import { Footer, Navbar } from '../components';
import { db } from '../firebase/config';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert('Message has been submitted');
                console.log('submitted');
            })
            .catch((error) => {
                alert(error.message);
            });

      setName('');
      setEmail('');
      setMessage('');
    };

    // set up contact form email.js

  return (
    <div className="contact-container">
        <Navbar />
        <form className="contact-form" onSubmit={handleSubmit}>
              <h1>Contact Us</h1>

              <div className="contact-form-input">
                <label>Name</label>
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) }/>
              </div>

              <div className="contact-form-input">
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) }/>
              </div>

              {/* add a message input */}
              <div className="contact-form-input">
                <label>Message</label>
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value) }></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
          <Footer />
    </div>
  )
}

export default ContactUs