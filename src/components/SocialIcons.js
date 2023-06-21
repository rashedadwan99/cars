import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
function SocialIcons() {
  return (
    <div className="social-icons">
      <FaFacebookF />
      <ImInstagram />
      <BsTwitter />

      <div className="vertical-line">
        <span className="scroll-text">Scroll</span>
      </div>
    </div>
  );
}

export default SocialIcons;
