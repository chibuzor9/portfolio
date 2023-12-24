import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/dp.jpeg'
import HeaderSocials from './HeaderSocials'
import Typewriter from '../typewriter/typewriter'

const Header = () => {
  const strings = [
    "Full-Stack Developer",
    "Python Expert",
    "React Intermediate",
    "Flask Beginner",
    "Angular Beginner"
  ];

  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>CHIBUZOR EMMANUEL</h1>
        <Typewriter texts={strings} />
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Profile Picture" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header