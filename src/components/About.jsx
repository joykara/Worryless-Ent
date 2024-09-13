import React, { useRef } from 'react';
import { BiSolidCameraMovie, BiSolidMicrophoneAlt } from 'react-icons/bi';
import { BsSpeakerFill } from 'react-icons/bs';
import { FaCameraRetro, FaRecordVinyl, FaMusic } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { PiSpeakerHighFill } from 'react-icons/pi';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const iconVariants = {
    initial: { opacity: 0, rotate: 0, fill: '#000000' },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    hover: {
      rotate: 360,
      fill: '#FFA500',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="wl-about-container"
      id='about'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="wl-about">
        <h1>ABOUT US</h1>
        <hr />
        <p>Worryless Entertainment is a full-service sound company that provides sound reinforcement, photography, and videography for live events. We are passionate about capturing moments, telling stories, and creating unforgettable experiences for our clients. With our team of talented professionals and state-of-the-art equipment, we bring your vision to life and ensure every detail is captured with precision and artistry.</p>
        <p>Our goal is to make your event a success by providing you with the best possible experience.</p>
      </div>
      <ul className='wl-about-icons'>
        {[
          BiSolidCameraMovie,
          GiSettingsKnobs,
          FaCameraRetro,
          PiSpeakerHighFill,
          BiSolidMicrophoneAlt,
          BsSpeakerFill,
          FaRecordVinyl,
          FaMusic
        ].map((Icon, index) => (
          <motion.li
            key={index}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: index * 0.1 }}
          >
            <Icon size={30} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

export default About