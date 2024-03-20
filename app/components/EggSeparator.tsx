"use client";
import React, { useEffect } from "react";
import Eggs from "./Eggs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EggSeparator = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Setup the animation for the eggs
    gsap.to("#egg1Md", {
      x: -800, // Move egg1 to the left
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    // Animation for the line separator
    gsap.fromTo(
      "#eggSeparatorLineMd",
      { scaleX: 0, transformOrigin: "center center" },
      {
        scaleX: 190,
        scrollTrigger: {
          trigger: "#eggSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
    gsap.to("#egg2Md", {
      x: 800, // Move egg2 to the right
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    // MOBILE
    gsap.to("#egg1", {
      x: -400, // Move egg1 to the left
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    // Animation for the line separator
    gsap.fromTo(
      "#eggSeparatorLine",
      { scaleX: 0, transformOrigin: "center center" },
      {
        scaleX: 85,
        scrollTrigger: {
          trigger: "#eggSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
    gsap.to("#egg2", {
      x: 400, // Move egg2 to the right
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="flex items-center justify-center mb-64">
      {/* For Mobile */}
      <Eggs id="egg1" custom="w-10 md:hidden" />
      <div
        id="eggSeparatorLine"
        className="md:hidden absolute h-1 w-2 bg-[#EAF5FF]"
      ></div>
      <Eggs id="egg2" custom="w-10 md:hidden absolute" />

      {/* For Desktop */}
      <Eggs id="egg1Md" custom="w-16 hidden md:inline-block" />
      <div
        id="eggSeparatorLineMd"
        className="absolute h-2 w-2 bg-[#EAF5FF] hidden md:inline-block"
      ></div>
      <Eggs id="egg2Md" custom="w-16 absolute hidden md:inline-block" />
    </div>
  );
};

export default EggSeparator;
