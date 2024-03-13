import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import img1 from "../images/menu.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const ResponsiveNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Website</h1>
        </div>
        <div className="nav-link">
          <div   className={navbar ? "newlinks active" : "newlinks"}>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/Service" className="link">
              Services
            </Link>
            <Link to="/About" className="link">
              About
            </Link>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </div>
          <div className="hamburger" onClick={ResponsiveNavbar}>
            <img
              src={img1}
              style={{
                width: "40px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            />  
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
