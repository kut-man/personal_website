"use client";

import { useRef, useState, useMemo } from "react";

const Text = () => {
  const animationText = "█▓▒▒░░░<>/";
  const [textValue, setTextValue] = useState("Interactive Front-end Developer");
  const numberOfRerenders = useRef(0);
  numberOfRerenders.current++;

    if (numberOfRerenders.current < 20) {
      setTimeout(() => {
        let randomText = "";
        for (let i = 0; i < 30; i++) {
          randomText +=
            animationText[Math.floor(Math.random() * animationText.length)];
        }
        setTextValue(randomText);
      }, 100);
    }


  return <p>{textValue}</p>;
};

export default Text;
