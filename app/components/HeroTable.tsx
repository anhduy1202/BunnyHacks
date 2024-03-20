import React from "react";

const HeroTable = () => {
  return (
    <div className="flex md:grid md:grid-cols-8 mt-4 justify-center">
      <div className="gap-2 flex bg-main_yellow flex-col col-start-1 col-span-1 md:text-[1.5rem] p-2 ">
        <p>WHEN</p>
        <p>WHERE</p>
        <p>WHO</p>
      </div>
      <div className="gap-2 flex bg-white flex-col col-start-2 col-span-6 md:text-[1.5rem] font-normal p-2 md:w-[70%]">
        <p className="">March 31st - April 7th</p>
        <p className="">Virtual</p>
        <p className="">CSUF Students only</p>
      </div>
    </div>
  );
};

export default HeroTable;
