import React from 'react'
import './experience.css'

import { ImHtmlFive } from "react-icons/im"
import { FaCss3Alt } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { FaBootstrap } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaAngular } from "react-icons/fa"
import { DiNodejsSmall } from "react-icons/di"
import { FaPython } from "react-icons/fa"
import { BsDatabaseCheck } from "react-icons/bs"
import { FaUikit } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills Do I Have</h5>
      <h2>My Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__info">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaUikit className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend  */}


        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__info">
            <article className="experience__details">
              <DiNodejsSmall className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <FaPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            {/* <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsDatabaseCheck className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience