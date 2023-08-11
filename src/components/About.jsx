import React from 'react';
import about from '../assets/mixer2.jpg';

const About = () => {
  return (
      <>
        <section className="wl-about-container" id='about'>
            <div className="wl-about">
                <h1>ABOUT US</h1>
                <p>Worryless Entertainment is a full-service sound company that provides sound reinforcement, photography, and videography for live events.</p>
                <p>We are passionate about capturing moments, telling stories, and creating unforgettable experiences for our clients. With our team of talented professionals and state-of-the-art equipment, we bring your vision to life and ensure every detail is captured with precision and artistry.</p>
                <p>Our goal is to make your event a success by providing you with the best possible experience.</p>
            </div>
            <div className="wl-about-image">
                <img src={about} alt="WorryLess Entertainment" />
            </div>
        </section>
      </>
  )
}

export default About