import Link from "next/link";
import React from "react";

const BodyHero = () => {
  return (
    <div className="text-dark_blue flex flex-col justify-center my-12 md:my-20 items-center ">
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3rem]">
        Be Sure to
        <span className="text-dark_blue shadow-none">&nbsp;REGISTER&nbsp;</span>
        !
      </p>
      <Link className="md:text-[1.5rem]" href="https://bunnyhack.devpost.com/">
        {" "}
        bunnyhack.devpost.com
      </Link>
      <div className="mt-12 text-center md:text-[1.25rem] flex flex-col gap-4">
        <p>Registration for CSUF students only with valid CSUF email</p>
        <p>Webathon starts at 8AM March 31st, ends at 11:45PM April 7th</p>
        <p>
          Submit your project on{" "}
          <Link href={"https://bunnyhack.devpost.com/"} target="_blank">
            {" "}
            <strong>BunnyHacks Devpost</strong>{" "}
          </Link>{" "}
          before the deadline!
        </p>
      </div>
    </div>
  );
};

export default BodyHero;
