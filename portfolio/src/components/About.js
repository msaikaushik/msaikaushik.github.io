import React, { useEffect, useRef } from "react";
import "./styles/About.css";

import TypeIt from "typeit-react";

const Coloured = ({ children }) => {
  return <div style={{ color: "#00A2FF" }}>{children}</div>;
};

export default function About() {
  return (
    <div className="about">

      <div className="color-container"></div>
      
      <div className="about-container">
        <div className="flowing-desc">
          I'm a
          <Coloured className="coloured">
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type("Software Developer.")
                  .pause(750)
                  .delete(19)
                  .pause(500)
                  .type("Digital Artist.")
                  .pause(750)
                  .delete(15)
                  .pause(500)
                  .type("3D Modeller.")
                  .pause(750)
                  .delete(12);

                return instance;
              }}
              options={{
                waitUntilVisible: true,
                loop: true,
                element: "h1",
                lifeLike: true,
                cursorChar: "_",
                smartBackspace: true,
              }}
            ></TypeIt>
          </Coloured>
        </div>

        <div className="interests">
          I also love hiking, Playing basketball, Piano, Digital Art, and Swimming.
        </div>
      </div>
      
    </div>
  );
}
