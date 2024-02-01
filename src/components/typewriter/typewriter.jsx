import React, { useEffect, useState } from "react";

const Typewriter = ({ texts: text }) => {
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    let currentText = text[current];

    const timer = setInterval(() => {
      setDisplay((previousText) => previousText + currentText[index]);
      index++;

      if (index === currentText.length) {
        clearInterval(timer);

        setTimeout(() => {
          setDisplay("");
          setCurrent((previousIndex) => (previousIndex + 1) % text.length);
        }, 1000);
      }
    }, 120);

    return () => clearInterval(timer);
  }, [text, current]);

  return <h3 style={{ overflow: "hidden" }}>{display}</h3>;
};

export default Typewriter;
