import React from 'react';
import wedding from '../assets/wedding.jpg';
import graduation from '../assets/graduation.jpg';
import corporate from '../assets/corporate.jpg';

const Services = () => {
  return (
      <>
          <section className="wl-services-container">
              <div className="flex flex-col text-center m-auto w-[90%] md:w-[70%] gap-2">
                  <span>REAL PROJECTS. REAL RESULTS</span>
                  <h1>WHAT WE OFFER</h1>
                    <hr />
                  <p>Invite us to your live event and see the difference</p>
                  <p>Whether you're planning a corporate event, a wedding, or a music festival, we are committed to providing you with the best possible sound production services;</p>
                  <ul className='flex justify-evenly gap-4 flex-wrap my-4'>
                      <li className='list-disc'>Sound Reinforcement</li>
                      <li className='list-disc'>Photography</li>
                      <li className='list-disc'>Videography</li>
                      <li className='list-disc'>Live Events</li>
                  </ul>
              </div>
              <div className="wl-services-images">
                <div className="wl-services-image">
                      <img src={wedding} alt="WorryLess Entertainment" />
                      <p>WEDDINGS</p>
                </div>
                <div className="wl-services-image">
                      <img src={graduation} alt="WorryLess Entertainment" />
                      <p>GRADUATION</p>
                </div>
                <div className="wl-services-image">
                      <img src={corporate} alt="WorryLess Entertainment" />
                      <p>CORPORATE EVENTS</p>
                </div>
              </div>
          </section>
      </>
  )
}

export default Services