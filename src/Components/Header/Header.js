import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const iconStyle = {
    color: "white",
  };

  return (
    <>
      <div className="header-top">
        <div className="contact-div">
          <p>
            <a title="mt1027319@gmail.com" href="mailto:mt1027319@gmail.com">
              mt1027319@gmail.com
            </a>
          </p>
          <p>
            <a title="(+91) 910 9330 696" href="tel:+919109330696">
              (+91) 910 9330 696
            </a>
          </p>
        </div>
        <div className="icon-div">
          <a href="https://www.facebook.com/sawindia/">
            <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
          </a>
          <a href="https://www.youtube.com/sawindia/">
            <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/company/sawindia/">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
