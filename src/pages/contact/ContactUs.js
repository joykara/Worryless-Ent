import React, {useState} from 'react';
import './contact.css';
import { Footer, Navbar } from '../../components';
import { db } from '../../firebase/config';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // event type
    const [selectedEvents, setSelectedEvents] = useState([]);

    const handleEventToggle = (eventValue) => {
      if (selectedEvents.includes(eventValue)) {
        setSelectedEvents(selectedEvents.filter(event => event !== eventValue));
      } else {
        setSelectedEvents([...selectedEvents, eventValue]);
      }
    };
  // date
  const [date, setDate] = useState('');

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            date: date,
            selectedEvents: selectedEvents,
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
      setDate('');
      setSelectedEvents('');
    };

    // set up contact form email.js

  return (
    <div className="contact-container">
        <Navbar />
        <form className="contact-form" onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
              <hr />
              <p>Have a question or want to book an event? We'd love to hear from you!</p>
              <p>Please fill out the form below, and we'll be in touch.</p>

              <div className="contact-form-input">
                <label>Name <span>(required)</span></label>
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } required/>
              </div>

              <div className="contact-form-input">
                <label>Email <span>(required)</span></label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } required/>
              </div>
              {/* select event type */}
              <div className="contact-form-input">
                <label>Event Type</label>
                <div className='events-options'>
                  <label>
                    <input type="checkbox" value="Corporate" checked={selectedEvents.includes("Corporate")}
                      onChange={() => handleEventToggle("Corporate")}/>
                    Corporate
                  </label>
                  <label>
                    <input type="checkbox" value="Presentation" checked={selectedEvents.includes("Presentation")}
                      onChange={() => handleEventToggle("Presentation")}/>
                    Presentation
                  </label>
                  <label>
                    <input type="checkbox" value="Private Event" checked={selectedEvents.includes("Private Event")}
                      onChange={() => handleEventToggle("Private Event")}/>
                    Private Event
                  </label>
                  <label>
                    <input type="checkbox" value="Wedding" checked={selectedEvents.includes("Wedding")}
                      onChange={() => handleEventToggle("Wedding")}/>
                    Wedding
                  </label>
                  <label>
                    <input type="checkbox" value="Birthday" checked={selectedEvents.includes("Birthday")}
                      onChange={() => handleEventToggle("Birthday")}/>
                    Birthday
                  </label>
                  <label>
                    <input type="checkbox" value="Other" checked={selectedEvents.includes("Other")}
                      onChange={() => handleEventToggle("Other")}/>
                    Other
                  </label>
                </div>
              </div>
              {/* add a date input */}
              <div className="contact-form-input" id='date'>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>

              {/* add a message input */}
              <div className="contact-form-input">
                <label>Message <span>(required)</span></label>
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value) } required></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
          <Footer />
    </div>
  )
}

export default ContactUs