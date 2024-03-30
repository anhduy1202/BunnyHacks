"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Eggs from "./Eggs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#footerPinkEgg, #footerBlueEgg, #footerYellowEgg",
      {
        y: 100,
        duration: 2,
      },
      {
        y: 0,
        ease: "bounce.in",
        scrollTrigger: {
          trigger: "#social",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <footer id="footer" className="mt-72 md:mt-24 relative">
      <div className=" z-[10] w-[100vw] md:min-h-[28em] relative">
        <img
          src="/base2.svg"
          className="z-[-1] w-screen absolute bottom-0"
          alt="grass footer"
        />
        <img
          src="/base3.svg"
          className="absolute top-[-10em] h-[10em] md:top-0 md:h-[24em] left-[50%] z-[-10] translate-x-[-50%]"
          alt="grass footer"
        />
        <img
          src="/full_bunny.svg"
          alt="Standing bunny"
          className="z-[10] absolute w-16 md:w-32 left-12 md:left-24 top-[-14em] md:top-[-10em]"
        />
        <Eggs
          src="blue_egg"
          id="footerBlueEgg"
          custom="w-16 md:w-32 top-[-10em]  md:top-0 rotate-[15deg] translate-x-[-50%] left-[65%] z-[-10] absolute"
        />
        <Eggs
          src="pink_egg"
          id="footerPinkEgg"
          custom="w-16 md:w-28 top-[-10em] md:top-[-5em] md:left-4 z-[-10] rotate-[20deg] absolute"
        />
        <Eggs
          src="yellow_egg"
          id="footerYellowEgg"
          custom="w-16 md:w-32 top-[-10em] right-4 md:top-[-5em] md:right-4 z-[-10] rotate-[-45deg] absolute"
        />
        <Link
          href="/discord"
          className="hidden md:block text-center text-dark_blue font-bold md:text-[2.25rem] translate-x-[-50%] top-[-4em] md:top-48 absolute left-[50%]"
        >
          bunnyhacks.acmcsuf.com/discord
        </Link>
        <p className="hidden md:block text-center translate-x-[-50%] md:text-[1.5rem] text-dark_blue font-medium top-0 md:top-72 absolute left-[50%]">
          Click the link above to join ACM discord, look for bunnyhacks channel
          and get updated on the event and more!
        </p>
        <Link target="_blank" href={"https://github.com/anhduy1202/BunnyHacks"} className="text-center md:text-[1.5rem] text-black font-medium translate-x-[-50%] top-[-4em] md:top-[24rem] absolute left-[50%]">
          Source Code
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
