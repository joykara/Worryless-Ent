import React from 'react';
import { BiSolidCameraMovie, BiSolidMicrophoneAlt } from 'react-icons/bi';
import { BsSpeakerFill } from 'react-icons/bs';
import { FaCameraRetro, FaRecordVinyl, FaMusic } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { PiSpeakerHighFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

const About = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
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
        {[
          { Icon: BiSolidCameraMovie, size: 35 },
          { Icon: GiSettingsKnobs, size: 35 },
          { Icon: FaCameraRetro, size: 30 },
          { Icon: PiSpeakerHighFill, size: 35 },
          { Icon: BiSolidMicrophoneAlt, size: 35 },
          { Icon: BsSpeakerFill, size: 32 },
          { Icon: FaRecordVinyl, size: 35 },
          { Icon: FaMusic, size: 30 }
        ].map(({ Icon, size }, index) => (
          <motion.li
            key={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Icon size={size} />
          </motion.li>
        ))}
      </ul>
            {/* <div className="wl-about-image">
                <img src={about} alt="WorryLess Entertainment" />
            </div> */}
        </section>
      </>
  )
}

export default About