import Link from "next/link";
import React from "react";

const Vote = () => {
  return (
    <section className="mx-12 text-dark_blue flex flex-col justify-center my-10 md:my-14 items-center ">
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3.5rem]">
        Public Vote
      </p>
      <p className="mt-8 font-bold text-[1.25rem] md:text-[1.5rem] text-center">
        Click the button below to cast your votes!
      </p>
      <Link
        target="_blank"
        href={"https://bunnyhack.devpost.com/"}
        className="mt-8 font-bold text-[1.25rem] md:text-[1.5rem] bg-main_green hover:bg-[#97b469] duration-150 ease-in-out border-4 border-dark_blue py-2 px-8 md:py-4 md:px-16 rounded-xl"
      >
        Vote
      </Link>
    </section>
  );
};

export default Vote;
