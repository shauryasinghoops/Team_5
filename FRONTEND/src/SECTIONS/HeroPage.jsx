import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-black flex justify-center bg-line">
      <div
        className="w-full min-h-screen absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, #065f46 10%, #000000 80%)' }}
      ></div>
      <div className="mt-[5vw] font-medium text-[5vw] text-white onlyFont text-center absolute z-20">
        Looking For Reliable AuthN &
        <br />
        <span className="">AuthZ Solution?</span>

        <div className="w-[89vw] h-[40vw] bg-black mt-20 rounded-2xl border-2 border-gray-100">

        </div>
      </div>
      <div></div>
      
    
    </div>
  );
};

export default HeroPage;
