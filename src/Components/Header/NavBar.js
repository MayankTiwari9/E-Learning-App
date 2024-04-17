import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';
import TokenContext from '../../store/token-context';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tokenContext = useContext(TokenContext);
  const isLoggedIn = tokenContext.isLoggedIn;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <div className={`logo-div ${isSticky ? 'sticky' : ''}`}>
          <h3>Smart Education</h3>
          <div
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className="menu-icon"></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
            <Link to="/online-course">Online Courses</Link>
            <Link to="/documentation">Documentations</Link>
            <Link to="/test">Mock Tests</Link>
            {isLoggedIn ? (<Link className="preNavLink" to="/">
              <div className="signup-div" onClick={() => tokenContext.login('')}>
                Log Out
              </div>
            </Link>) : (<Link className="preNavLink" to="/auth">
              <div className="signup-div">
                SignIn
              </div>
            </Link>
               )} 
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default Navbar;

