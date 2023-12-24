/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">TO Profile</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chibuzor-emmanuel" target="_blank"><FaLinkedin /></a>
        <a href="https://web.facebook.com/ego.tonio" target="_blank"><FaFacebook /></a>
        <a href="https://github.com/chibuzor9" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/chibuzor_03" target="_blank"><FaTwitter /></a>
      </div>


      <div className="footer_copyright">
        <small> &copy; CHIBUZOR EMMANUEL. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer