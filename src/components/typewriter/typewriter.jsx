import React, { useEffect, useState } from "react";

const Typewriter = ({ texts }) => {
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[current];

    if (index < currentText.length) {
      const timer = setTimeout(() => {
        setDisplay((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplay("");
        setIndex(0);
        setCurrent((prev) => (prev + 1) % texts.length);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }
  }, [texts, current, index]);

  return <h3 style={{ height: "50px" }}>{display}</h3>;
};

export default Typewriter;