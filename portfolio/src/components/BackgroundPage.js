import React from "react";
import "./styles/BackgroundPage.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function BackgroundPage() {
  gsap.registerPlugin(ScrollTrigger);

  let mainBackground = useRef(null);

  useEffect(() => {
    const element = mainBackground.current;

    // scrolltrigger
    gsap.to(element.querySelector(".faraway_mountains"), {
      y: -80,
      scaleY: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector(".scrollBegin"),
        scrub: 2,
        start: "top 35%",
        end: "bottom center",
      },
    });

    gsap.to(
      element.querySelector(".mountains"),
      {
        y: -40,
        duration: 6,
        scaleY: 1.2,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.to(
      element.querySelector(".river"),
      {
        y: -100,
        duration: 6,
        scaleY: 1.2,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.to(
      element.querySelector(".lake"),
      {
        y: -110,
        duration: 5,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.to(
      element.querySelector(".treeline"),
      {
        y: -220,
        duration: 6,
        scaleY: 1.25,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.to(
      element.querySelector(".foreground"),
      {
        y: -120,
        duration: 6,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.to(
      element.querySelector(".shadow"),
      {
        duration: 6,
        scaleY: 2,
        scrollTrigger: {
          trigger: element.querySelector(".scrollBegin"),
          scrub: 2,
          start: "top 35%",
          end: "bottom center",
        },
      },
      "-=6"
    );

    gsap.from(element.querySelector(".heading"), {
      duration: 5,
      y: -500,
      scale: 1.2,
      scrollTrigger: {
        trigger: element.querySelector(".scrollBegin"),
        scrub: 2,
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <div ref={mainBackground}>
      <section className="scrollBegin">
        {/* <img src="images/background.png" alt="sky"/> */}
        {/* TODO: Look into Fonts. */}

        <img
          src="images/level6.png"
          alt="faraway_mountains"
          className="faraway_mountains"
        />
        <img src="images/level5.png" alt="mountains" className="mountains" />
        <img src="images/level4.png" alt="river" className="river" />
        <img src="images/level3.png" alt="lake" className="lake" />

        <h2 className="heading">
          Hi!, I'm <span className="name">Kaushik.</span>
        </h2>

        <img src="images/level2.png" alt="treeline" className="treeline" />
        <img src="images/level1.png" alt="foreground" className="foreground" />
        <div className="shadow"></div>
      </section>
    </div>
  );
}
