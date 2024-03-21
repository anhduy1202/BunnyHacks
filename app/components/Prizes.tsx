import React from "react";
import { EggPrizes } from "./EggAnimation";

const Prizes = () => {
  return (
    <div className="mx-12 text-dark_blue flex flex-col justify-center my-20 md:my-32 items-center ">
      <p className="blue-outline font-bold text-white text-[2rem] md:text-[3.5rem]">
        Prizes
      </p>
      <div className="flex flex-col mt-16 md:grid md:grid-col-2 gap-12 justify-center">
        <div className="col-start-1 flex flex-col bg-main_green rounded-md p-4 text-center">
          <p className="text-dark-blue font-bold text-[1.5rem] md:text-[2rem]">
            BunnyHacks Prizes
          </p>
          <p className="mt-4 mb-12 text-black text-[1.25rem]">
            Join for a chance to win some cool tech gadgets <br />
            and some spring themed goodies!
          </p>
          <EggPrizes />
        </div>
        <div className="col-start-2 flex flex-col">
          <div className="bg-[#FF8888] p-2 rounded-md md:text-[1.5rem] font-medium">
            <p>1st Place</p>
          </div>
          <div className="bg-main_green p-2 rounded-md md:text-[1.5rem] font-medium">
            <p>2nd Place</p>
          </div>
          <div className="bg-[#7F93EA] p-2 rounded-md md:text-[1.5rem] font-medium">
            <p>3rd Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
