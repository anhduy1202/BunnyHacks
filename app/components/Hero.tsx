"use client";
import React from "react";
import Cloud from "./Clouds";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.to("#cloud", {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "none",
    });
    gsap
      .timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" })
      .to("#eggBasket", {
        rotation: -5,
        x: -2,
        transformOrigin: "top",
        duration: 1,
      })
      .to("#eggBasket", {
        rotation: 5,
        x: 2,
        transformOrigin: "top",
        duration: 1,
      });
  }, []);
  return (
    <section className="relative text-dark_blue font-poppins bg-main_blue flex min-h-[800px] md:min-h-[1000px] flex-col items-center font-bold">
      <Cloud top="top-[1em]" left="left-48 md:block hidden" />
      <Cloud top="top-[8em]" left="left-14 md:block hidden" />
      <Cloud top="top-[1em]" left="left-[42rem] md:block hidden" />
      <Cloud top="top-[8em]" left="left-[52rem] md:block hidden" />
      <Cloud top="top-[1em]" left="right-[30em] md:block hidden" />
      <Cloud top="top-[8em]" left="right-[22em]" />
      <Cloud top="top-[1em]" left="right-[-5em]" />
      <Cloud top="top-[1em]" left="right-[10em]" />
      <Cloud top="top-[8em]" left="right-[4em]" />
      <div className="relative mt-[12rem] text-center flex flex-col items-center md:block md:ml-[14rem] md:text-start">
        <p className="text-[1.5rem] md:text-[2.25rem]">
          ACM at
          <span className="blue-outline text-white">&nbsp;CSUF&nbsp;</span>
          presents
        </p>
        <p className="text-[3rem] md:text-[6rem]">
          Bunny
          <span className="blue-outline text-white">Hacks</span>
        </p>
        <p className="w-[80%] text-[1.25rem] md:text-[1.5rem] font-normal  text-center md:text-start">
          A Spring-themed 1-week virtual webathon (hackathon but website project
          only!) hosted by ACM at CSUF.
        </p>
      </div>
      <img
        className="absolute right-[1em] bottom-[2rem] md:bottom-[10rem] w-[10em] md:w-[24em]"
        src="/rabbit.svg"
        alt="bunny"
      />
      <img
        id="eggBasket"
        className="absolute md:right-[18em] bottom-[1rem] right-[8em] z-[10] w-[6em] md:w-[12em] md:bottom-[10rem]"
        src="/basket.svg"
        alt="basket"
      />
      <img
        className="w-screen absolute bottom-0 md:bottom-0"
        src="/grassbase.svg"
        alt="grass base"
      />
    </section>
  );
};

export default Hero;
