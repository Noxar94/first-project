import { Link } from "react-router-dom"; // Link instead of a
import { useRef } from "react"; // add a ref attribute to an element to access it directly.
import { FaBars, FaTimes } from "react-icons/fa"; // icons
import React from "react"; // react
import "../styles/navbar.css"; //navbar

import "animate.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    // toggle navbar

    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3 className="logo">Jonatan.Dev</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/contact">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
