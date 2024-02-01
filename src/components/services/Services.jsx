import React from "react";
import "./services.css";
import { FaHandPointRight } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaHandPointRight className="service__list-icon" />
              <p>Corporate Website Development</p>
            </li>
            <li>
              <FaHandPointRight className="service__list-icon" />
              <p>E-Commerce </p>
            </li>
            <li>
              <FaHandPointRight className="service__list-icon" />
              <p>Web Applications</p>
            </li>
            <li>
              <FaHandPointRight className="service__list-icon" />
              <p>API Integration</p>
            </li>
            <li>
              <FaHandPointRight className="service__list-icon" />
              <p>Bug fixing </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
      </div>
    </section>
  );
};

export default Services;
