"use client";
import Carousel from "../../(components)/Carousel";
const WhatOurCustomersHaveToSay = () => {
  return (
    <div className="pb-[3vw] pt-[1vh] lg:pb-[2rem] lg:pt-[0rem] text-center bg-[#ECE5DD]"> {/* Reduced bottom padding */}
      <div className="text-[4vw] lg:text-[3rem] lg:pl-9 font-bold text-black">
        What Our <span className="text-[#97571c]">Customers Have to Say</span>
      </div>
      <div className="pt-[2vw]">
        <Carousel />
      </div>
    </div>
  );
}
export default WhatOurCustomersHaveToSay;