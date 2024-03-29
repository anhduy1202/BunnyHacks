"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScoringCriteria = () => {
  const critRef = useRef<any>();
  const criterias = [
    {
      id: "c1",
      label: "Design Aesthetics",
      textColor: "text-[#FF8888]",
      bgColor: "bg-[#FF8888]",
      description:
        "How visually appealing is the website? Is It Spring-themed? Consider the layout, textColor scheme, typography, and overall graphic design.",
    },
    {
      id: "c2",
      label: "User Experience (UX)",
      textColor: "text-[#BAAFFF]",
      bgColor: "bg-[#BAAFFF]",
      description:
        "How intuitive and user-friendly is the website? Consider navigation ease, clarity of information, and the absence of unnecessary steps or confusing elements.",
    },
    {
      id: "c3",
      label: "Functionality",
      textColor: "text-[#4FD02E]",
      bgColor: "bg-[#4FD02E]",
      description:
        "Does the website function as expected without bugs or glitches? Consider the smoothness of interactive features.",
    },
    {
      id: "c4",
      label: "Responsiveness",
      textColor: "text-[#FF73D8]",
      bgColor: "bg-[#FF73D8]",
      description:
        "How well does the website adapt to different screen sizes, from desktop monitors to mobile phones?",
    },
    {
      id: "c5",
      label: "Originality",
      textColor: "text-[#058FBB]",
      bgColor: "bg-[#058FBB]",
      description:
        "How unique are the design and features of the website? Consider the use of original content, creative features, and innovation.",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#test",
        start: "top center",
        end: "bottom center",
      },
    });
    tl.fromTo(
      "#c1",
      {
        height: 0,
      },
      {
        height: critRef.current.offsetHeight,
        duration: 1,
      },
    )
      .fromTo(
        "#c2",
        {
          height: 0,
        },
        {
          height: critRef.current.offsetHeight,
          duration: 1,
        },
        "+=0.1",
      )
      .fromTo(
        "#c3",
        {
          height: 0,
        },
        {
          height: critRef.current.offsetHeight,
          duration: 1,
        },
        "+=0.1",
      )
      .fromTo(
        "#c4",
        {
          height: 0,
        },
        {
          height: critRef.current.offsetHeight,
          duration: 1,
        },
      );
  }, []);
  return (
    <section
      id="test"
      className="relative mx-12 text-dark_blue flex flex-col justify-center mt-36 md:my-24 items-center "
    >
      <img
        src="/full_bunny.svg"
        alt="full bunny"
        className="absolute top-[-4em] w-12"
      />
      <p className="relative blue-outline font-bold text-white text-[2rem] md:text-[3.5rem] text-center">
        Scoring Criteria
      </p>
      <p className="mt-4 font-semibold md:text-[1.25rem] text-black text-center">
        {" "}
        Because it's public vote, please be fair and vote for project that
        matches these criteria
      </p>
      <div className="mt-12 md:mt-24 flex flex-col gap-2">
        {criterias.map((crit, idx) => {
          return (
            <div key={crit.id} className="flex items-start gap-12 ">
              <div
                ref={critRef}
                id={crit.id}
                className={`h-48 w-6 ${idx == 0 ? "rounded-t-2xl" : idx == criterias.length - 1 ? "rounded-b-2xl" : ""} ${crit.bgColor}`}
              ></div>
              <div className="mt-4 flex flex-col md:w-[720px]">
                <p
                  className={`${crit.textColor} font-semibold text-[1,25rem] md:text-[1.5rem]`}
                >
                  {crit.label}
                </p>
                <p className="md:text-[1.25rem] font-medium">
                  {crit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScoringCriteria;
