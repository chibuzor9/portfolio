/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { BiSolidMessageDetail } from 'react-icons/bi'

// useState Hook in REACT 
import { useState } from 'react'

const Nav = () => {

	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			<a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BsPersonCircle /></a>
			<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAward /></a>
			<a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
			<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageDetail /></a>
		</nav>
	)
}

export default Nav