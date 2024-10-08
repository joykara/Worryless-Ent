import React from 'react';
import './main.css';
import Navbar from './Navbar';

const Header = () => {
  return (
      <>
          <div className="wl-header-container">
              <Navbar/>
              <div className="wl-header">
                  <h1 className='text-orange-300'>WORRYLESS ENTERTAINMENT</h1>
                  <h2>We're not just a sound company.<br/> We're a sound investment.</h2>
              </div>
          </div>
      </>
  )
}

export default Header