"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Cloud from "./Animations/Clouds";

const Social = () => {
  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" }).fromTo(
      "#ear1",
      {
        rotate: 10,
      },
      {
        rotate: -20,
        duration: 4,
        transformOrigin: "bottom",
      },
    );

    gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" }).fromTo(
      "#ear2",
      {
        rotate: -10,
      },
      {
        rotate: 20,
        duration: 4,
        transformOrigin: "bottom",
      },
    );
  }, []);
  return (
    <section className="faq mx-12 text-dark_blue flex flex-col justify-center my-10 md:my-14 items-center ">
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3.5rem]">
        Join Our Discord!
      </p>
      <div className="mt-32 md:mt-48 relative">
        <Cloud top="top-[1em]" left="left-0 z-[10] md:block hidden" />
        <Cloud top="top-[8em]" left="right-[30em] md:block hidden" />
        <Cloud top="top-[1em]" left="right-[-20em]" />
        <Cloud top="top-[8em]" left="right-[-10em]" />
        <img
          id="ear1"
          src="rabbit_ear.svg"
          alt="Bunny Ear"
          className="w-16 md:w-28 transform scaleX(-1) absolute top-[-60px] left-8 md:left-10 md:top-[-120px]"
        />
        <img
          id="ear2"
          src="rabbit_ear.svg"
          alt="Bunny Ear"
          className="w-16 md:w-28 absolute top-[-60px] right-8 md:right-10 md:top-[-120px]"
        />
        <img
          src="discord.svg"
          alt="Discord logo"
          className="w-52 md:w-[22rem] relative"
        />
      </div>
    </section>
  );
};

export default Social;
