import React from 'react';
import { RiFacebookCircleFill, RiYoutubeFill, RiInstagramFill } from 'react-icons/ri';
import './main.css';
import { Link } from 'react-router-dom';
import logo2 from '../logo2.png';

const Footer = () => {
    return (
        <>
            <section className="wl-footer-container">
                <div className="wl-footer">
                    <div className="wl-logo">
                        <img src={logo2} alt="WorryLess Logo" />
                    </div>
                    <div className="wl-footer-content">
                        <div className="wl-intro">
                            <h3><span>CONTACT US</span></h3>
                            <p>Ready to capture your special moments or create an unforgettable audio-visual experience? Get in touch with us today to discuss your project, request a quote, or schedule a consultation. We are available to answer any questions you may have and provide you with the personalized service you deserve.</p>
                        </div>
                        <div className="wl-footer-links">
                            <div className='wl-footer-contact-dets'>
                                <p><span>Phone:</span>254 729 000 000</p>
                                <p><span>Email:</span>hello@reallygreatsite.com</p>
                            </div>
                            <div className='wl-footer-cta'>
                                <p>Follow us on social media:</p>
                                <ul className='wl-footer-cta-links'>
                                <li><Link to="https://instagram.com/worrylessentke?igshid=ZDc4ODBmNjlmNQ=="><RiInstagramFill size={25}/></Link></li>
                                <li><Link to="https://www.facebook.com/profile.php?id=100095091060793&mibextid=ZbWKwL"><RiFacebookCircleFill size={25}/></Link></li>
                                <li><Link to="https://youtube.com/@WorrylessEntertainment"><RiYoutubeFill size={25}/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl-footer__copyright">
                        <p>©2017-2023 Worryless Entertainment</p>
                    </div>
                </div>
            </section>
      </>
  )
}

export default Footer