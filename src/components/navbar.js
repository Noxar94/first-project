import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import "../styles/navbar.css";
import Modal from "../components/modal";
import "animate.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
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
