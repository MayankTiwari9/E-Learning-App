// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, Outlet } from "react-router-dom";
// import TokenContext from "../../store/token-context";
// import { useContext } from 'react';

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   const tokenContext = useContext(TokenContext);

//   const isLoggedIn = tokenContext.isLoggedIn;

//   console.log(isLoggedIn);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//      <div className={`logo-div ${isSticky ? "sticky" : ""}`}>
//         <h1>Smart Class</h1>
//         <div
//           className={`menu-btn ${isMenuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="menu-icon"></div>
//         </div>
//         <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <Link to="/">Online Courses</Link>
//           <Link to="/">Documentations</Link>
//           <Link to="/">Mock Tests</Link>
//           <Link to="/">Contact Us</Link>
//           {!isLoggedIn ? <Link className="preNavLink" to="/sign-up">
//             <div className="signup-div">
//               Sign Up
//             </div>
//           </Link> : <Link className="preNavLink" to="/sign-up">
//             {/* <div className="signup-div"> */}
//               <button className="signup-div">Log Out</button>
//             {/* </div> */}
//           </Link>}
//         </div>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;

// Navbar.js
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
      {isLoggedIn && (
        <div className={`logo-div ${isSticky ? 'sticky' : ''}`}>
          <h1>Smart Class</h1>
          <div
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className="menu-icon"></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/">Online Courses</Link>
            <Link to="/">Documentations</Link>
            <Link to="/">Mock Tests</Link>
            <Link to="/">Contact Us</Link>
            <Link className="preNavLink" to="/">
              <button className="signup-div" onClick={() => tokenContext.login('')}>
                Log Out
              </button>
            </Link>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;

