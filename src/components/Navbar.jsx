import React, { useState } from "react";
import "./main.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { GrContact, GrGallery } from "react-icons/gr";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="wl-navbar-container">
        <div className="wl-navbar">
          <div className="wl-navbar-logo">
            <Link to={"/"}>
              <img src={logo} alt="WorryLess Entertainment" />
            </Link>
            <p>Worryless Ent.</p>
          </div>
          <nav className="wl-navbar-menu">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/#about">ABOUT</a>
              </li>
              <li>
                <a href="/">GALLERY</a>
              </li>
              <li>
                <a href="/contact-us">CONTACT</a>
              </li>
            </ul>
          </nav>

          {/* mobile navigation */}
          {toggleMenu === true ? (
            <div className="md:hidden fixed top-2 w-1/3 ml-2 rounded-lg right-1 bg-white z-30 shadow-md">
              <div className="flex flex-col justify-between items-start p-2">
                <RiCloseLine
                  className="h-6 w-6 cursor-pointer ml-4 self-end"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
                <Link
                  to="/"
                  className="flex gap-4 w-full items-center mb-2 px-4 hover:bg-orange-300 text-black hover:text-white transition-all ease-in-out duration-500 rounded-lg p-2"
                >
                  <BsGrid1X2 className="w-6 h-6" />
                  <span className="text-base">Home</span>
                </Link>
                <Link
                  to="/#about"
                  className="flex gap-4 w-full items-center mb-2 px-4 hover:bg-orange-300 text-black hover:text-white transition-all ease-in-out duration-500 rounded-lg p-2"
                >
                  <TbListDetails className="w-6 h-6" />
                  <span className="text-base">About</span>
                </Link>
                <Link
                  to="/gallery"
                  className="flex gap-4 w-full items-center mb-2 px-4 hover:bg-orange-300 text-black hover:text-white transition-all ease-in-out duration-500 rounded-lg p-2"
                >
                  <GrGallery className="w-6 h-6" />
                  <span className="text-base">Gallery</span>
                </Link>
                <Link
                  to="/contact-us"
                  className="flex gap-4 w-full items-center mb-2 px-4 hover:bg-orange-300 text-black hover:text-white transition-all ease-in-out duration-500 rounded-lg p-2"
                >
                  <GrContact className="w-6 h-6" />
                  <span className="text-base">Contact</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="md:hidden fixed top-2 w-auto mx-auto rounded-lg right-1 bg-white z-30 shadow-lg p-3">
              <RiMenuLine
                className="h-7 w-7 cursor-pointer"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
