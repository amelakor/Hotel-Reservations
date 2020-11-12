import React from "react";
import Title from "./Title";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Title title="Stay connected" />
      <ul className="footer-social">
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Copyright: 5 Star Hotel
      </div>
    </div>
  );
}

export default Footer;
