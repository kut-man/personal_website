"use client";

import { useEffect } from "react";
import baffle from "baffle";

const DevBio = () => {
  useEffect(() => {
    const target = baffle(".obfuscated");
    target.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 100);
  });

  return <p className="obfuscated">Interactive Front-end Developer</p>;
};

export default DevBio;
