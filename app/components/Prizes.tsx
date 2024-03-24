"use client";
import React, { useEffect } from "react";
import { EggPrizes } from "./Animations/EggAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Prizes = () => {
  const prizes = [
    {
      id: "1st",
      color: "bg-[#FF8888]",
      title: "1st Place",
      prize: "JBL G03 Speaker",
      image: "orange_miffy",
    },
    {
      id: "2nd",
      color: "bg-[#B7D784]",
      title: "2nd Place",
      prize: "7Leaves Free Drink Giftcard",
      image: "orange_miffy",
    },
    {
      id: "3rd",
      color: "bg-[#7F93EA]",
      title: "3rd Place",
      prize: "",
      image: "pink_miffy",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // slide from bottom
    gsap.fromTo(
      "#prizeHeader",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#prizeMainSection",
          toggleActions: "play reverse play reverse",
        },
      },
    );
    // slide from the left
    gsap.fromTo(
      "#prize",
      {
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#prizeMainSection",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, []);
  return (
    <section
      id="prizeMainSection"
      className="mx-12 text-dark_blue flex flex-col justify-center my-20 md:my-32 items-center "
    >
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3.5rem]">
        Prizes
      </p>
      <div className="flex flex-col mt-16 md:grid md:grid-col-2 gap-12 justify-center">
        <div
          id="prizeHeader"
          className="col-start-1 flex flex-col bg-main_green rounded-md p-4 text-center"
        >
          <p className="text-dark-blue font-bold text-[1.5rem] md:text-[2rem]">
            BunnyHacks Prizes
          </p>
          <p className="mt-4 mb-12 text-black text-[1.25rem]">
            Join for a chance to win some cool tech gadgets <br />
            and some spring themed goodies!
          </p>
          <EggPrizes />
        </div>
        <div
          id="prize"
          className="col-start-2 flex flex-col gap-4 items-center"
        >
          {prizes.map((prize) => {
            return (
              <div
                key={prize.id}
                className={`${prize.color} p-2 rounded-md text-[1.25rem] md:text-[1.5rem] font-semibold`}
              >
                <div className="flex items-center p-2">
                  <img
                    className="w-20"
                    src={`${prize.image}.svg`}
                    alt={prize.image}
                  />
                  <div className="ml-8 flex flex-col">
                    <p>{prize.title}</p>
                    {prize.prize.length > 1 && (
                      <li className="text-black font-normal text-[1rem] md:text-[1.25rem]">
                        {prize.prize}
                      </li>
                    )}
                    <li className="text-black font-normal text-[1rem] md:text-[1.25rem]">
                      Bunnyhacks {prize.title} Discord role
                    </li>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
