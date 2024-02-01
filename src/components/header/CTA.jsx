import React from "react";
import CV from "../../assets/doc/Resumé.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn" rel="noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Meet Me
      </a>
    </div>
  );
};

export default CTA;
