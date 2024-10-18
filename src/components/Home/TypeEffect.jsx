import React from "react";
import Typewriter from "typewriter-effect";

function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Java Developer",
          "SQL Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeEffect;