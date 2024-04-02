import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <div className={`logo-div ${isSticky ? "sticky" : ""}`}>
        <h1>E-Learning</h1>
        <div
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-icon"></div>
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Online Courses</Link>
          <Link to="/">Documentations</Link>
          <Link to="/">Mock Tests</Link>
          <Link to="/">Contact Us</Link>
          <Link className="preNavLink" to="/sign-up">
            <div className="signup-div">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
