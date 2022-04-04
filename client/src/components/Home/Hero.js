import React from "react";
import Button from "../Button";
import heroimg from "../../assets/hero.png";

const Hero = () => {
  return <div >
    <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="relative flex items-center justify-center w-full my-16 bg-gradient-to-br from-black/50 to-black/20 rounded-2xl">
        <div className="w-full">
          <img src={heroimg} alt="" title="" className="w-[1280px] object-cover rounded-2xl" />
        </div>
        <div className="absolute p-5 space-y-1 rounded-3xl sm:space-y-3 sm:text-left left-1 sm:left-8">
          <span className="text-xl lg:text-3xl">Beast Solo</span>
          <h4 className="text-4xl font-bold lg:text-7xl">Wireless</h4>
          <h4 className="text-4xl font-bold text-white lg:text-7xl">Headphones</h4>
          <Button text="Visit Our Shop" className="text-white bg-black hover:bg-white hover:text-black" to="#" />
        </div>
      </div>
    </div>
  </div>;
};

export default Hero;
