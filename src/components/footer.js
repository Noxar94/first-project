import "../styles/footer.css";
import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h2>Jonatan.dev</h2>
        </div>
        <ul className="footer-info">
          <li>
            <h5>Name: Jonatan Lundmark</h5>
          </li>
          <li>
            <h5>Email: Lundmark1223@hotmail.se</h5>
          </li>

          <li>
            <h5>
              Socials:
              <a href="https://www.facebook.com/jonatan.lundmark.9">
                <FaFacebook className="social-footer" />
              </a>
              <a href="https://www.instagram.com/noxar94/">
                <FaInstagram className="social-footer" />
              </a>
              <a href="https://www.linkedin.com/in/jonatan-lundmark-a47470172/">
                <FaLinkedinIn className="social-footer" />
              </a>
            </h5>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
