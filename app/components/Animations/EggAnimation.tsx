"use client";
import React, { useEffect } from "react";
import Eggs from "../Eggs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EggSeparator = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Setup the animation for the eggs
    gsap.to("#egg1Md", {
      x: -600, // Move egg1 to the left
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to("#egg2Md", {
      x: 600, // Move egg2 to the right
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    // MOBILE
    gsap.to("#egg1", {
      x: -140, // Move egg1 to the left
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
        scaleX: 30,
        duration: 1,
        scrollTrigger: {
          trigger: "#eggSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      "#eggSeparatorLineMd",
      { scaleX: 0, transformOrigin: "center center" },
      {
        scaleX: 140,
        scrollTrigger: {
          trigger: "#eggSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
    gsap.to("#egg2", {
      x: 140, // Move egg2 to the right
      scrollTrigger: {
        trigger: "#eggSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="flex items-center justify-center">
      {/* For Mobile */}
      <Eggs src="egg" id="egg1" custom="w-6 md:hidden absolute" />
      <div
        id="eggSeparatorLine"
        className="md:hidden absolute h-1 w-2 bg-[#EAF5FF]"
      ></div>
      <Eggs src="egg" id="egg2" custom="w-6 md:hidden absolute" />

      {/* For Desktop */}
      <Eggs src="egg" id="egg1Md" custom="w-16 hidden md:inline-block" />
      <div
        id="eggSeparatorLineMd"
        className="absolute h-2 w-2 bg-[#EAF5FF] hidden md:inline-block"
      ></div>
      <Eggs
        src="egg"
        id="egg2Md"
        custom="w-16 absolute hidden md:inline-block"
      />
    </div>
  );
};

export default EggSeparator;

export const EggPrizes = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Setup the animation for the eggs
    gsap
      .timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" })
      .to("#blueEgg", {
        scrollTrigger: {
          trigger: "#prizeSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        rotation: -5,
        x: -2,
        transformOrigin: "top",
        duration: 1,
      });
    gsap.fromTo(
      "#pinkEgg",
      { x: 0, rotation: 0, transformOrigin: "bottom" },
      {
        rotation: -25,
        x: -40,
        transformOrigin: "bottom",
        scrollTrigger: {
          trigger: "#prizeSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      "#yellowEgg",
      { x: 15, rotation: -45, transformOrigin: "bottom" },
      {
        rotation: 40,
        x: 50,
        transformOrigin: "bottom",
        scrollTrigger: {
          trigger: "#prizeSection",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <div className="flex items-center justify-center">
      <Eggs src="blue_egg" id="blueEgg" custom="w-16 md:w-28 z-[8]" />
      <Eggs src="pink_egg" id="pinkEgg" custom="w-12 md:w-24 absolute" />
      <Eggs src="yellow_egg" id="yellowEgg" custom="w-16 md:w-28 absolute" />
    </div>
  );
};
