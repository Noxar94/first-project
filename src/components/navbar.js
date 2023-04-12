import {Link} from "react-router-dom"
import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
    return (
      <header>
        <h3 className="logo">Jonatan.Dev</h3>
        <nav ref={navRef}>
          <Link to="/home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    );
}

export default Navbar;