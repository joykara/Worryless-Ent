import React from 'react';
import { BiSolidCameraMovie, BiSolidMicrophoneAlt } from 'react-icons/bi';
import { BsSpeakerFill } from 'react-icons/bs';
import { FaCameraRetro, FaRecordVinyl } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';

const About = () => {
  return (
      <>
        <section className="wl-about-container" id='about'>
            <div className="wl-about">
                <h1>ABOUT US</h1>
                <hr />
                <p>Worryless Entertainment is a full-service sound company that provides sound reinforcement, photography, and videography for live events. We are passionate about capturing moments, telling stories, and creating unforgettable experiences for our clients. With our team of talented professionals and state-of-the-art equipment, we bring your vision to life and ensure every detail is captured with precision and artistry.</p>
                <p>Our goal is to make your event a success by providing you with the best possible experience.</p>
            </div>
            <ul className='wl-about-icons'>
              <li><BiSolidCameraMovie size={35} /> </li>
              <li><GiSettingsKnobs size={35} /></li>
              <li><FaCameraRetro size={30} /></li>
              <li><BiSolidMicrophoneAlt size={35} /></li>
              <li><BsSpeakerFill size={35} /></li>
              <li><FaRecordVinyl size={35} /></li>
            </ul>
            {/* <div className="wl-about-image">
                <img src={about} alt="WorryLess Entertainment" />
            </div> */}
        </section>
      </>
  )
}

export default About