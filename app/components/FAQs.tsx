"use client";
import React from "react";

const FAQs = () => {
  let faqs = [
    {
      id: "faq1",
      question: "What is a webathon?",
      answer:
        "Webathon is hackathon but website project only, as long as its on a website",
    },
    {
      id: "faq2",
      question: "What should I build?",
      answer:
        "Website, you can build browser game as well, note that it must be Spring themed",
    },
    {
      id: "faq3",
      question: "What is Spring themed?",
      answer:
        "Anything related to Spring, flowers, grass, rabbits, sun, birds,...",
    },
    {
      id: "faq4",
      question: "How many people in a team?",
      answer: "1-3 people",
    },
    {
      id: "faq5",
      question: "Where do I register, submit my project?",
      answer: "https://bunnyhack.devpost.com/",
    },
  ];

  return (
    <section className="faq mx-12 text-dark_blue flex flex-col justify-center my-10 md:my-14 items-center ">
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3.5rem]">
        FAQ
      </p>
      <div className="mt-8 flex flex-col gap-16 justify-center text-center">
        {faqs.map((faq, index) => {
          return (
            <div id="faq" key={faq.id} className="flex flex-col relative">
              <img
                src="three_eggs.svg"
                className="top-[-30px] md:top-[-40px] left-[-40px] absolute w-24 md:w-36"
                alt="three eggs"
              />
              <img
                src="three_eggs.svg"
                className="top-[-30px] md:top-[-40px] right-[-40px] absolute w-24 md:w-36"
                alt="three eggs"
              />
              <p className="bg-main_green p-4 font-semibold md:text-[1.5rem] rounded-t-md">
                {faq.question}
              </p>
              <p className="bg-white p-4 rounded-b-md text-black md:text-[1.25rem]">
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
