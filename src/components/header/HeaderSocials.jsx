import React from "react";

import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://web.facebook.com/ego.tonio" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/chibuzor-emmanuel" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/chibuzor9" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/chibuzor_03" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
