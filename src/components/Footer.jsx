import React from 'react';
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import './main.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="wl-footer-container">
                <div className="wl-footer">
                    <div className="wl-logo">Logo</div>
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
                                <li><Link to="https://www.linkedin.com/company/hemllin/?viewAsMember=true"><RiLinkedinFill size={25}/></Link></li>
                                <li><Link to="https://twitter.com/hemllin"><RiTwitterFill size={25}/></Link></li>
                                <li><Link to="https://www.instagram.com/hemllin/"><RiInstagramFill size={25}/></Link></li>
                                <li><Link to="http://facebook.com/hemllin/"><RiFacebookCircleFill size={25}/></Link></li>
                                <li><Link to="https://www.youtube.com/@hemllin/featured"><RiYoutubeFill size={25}/></Link></li>
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