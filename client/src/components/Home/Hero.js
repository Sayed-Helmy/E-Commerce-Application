import React from "react";
import heroimg from "../../assets/hero.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-7xl lg:px-8">
        <div className="relative my-16 flex  h-full min-h-[400px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-black/50 to-black/20 sm:my-16">
          <div className="w-full">
            <img
              src={heroimg}
              alt=""
              title=""
              className="w-[1280px] rounded-2xl object-cover"
            />
          </div>
          <div className="absolute left-1 space-y-1 rounded-3xl p-5 sm:left-8 sm:space-y-3 sm:text-left">
            <span className="text-xl lg:text-3xl">Beast Solo</span>
            <h4 className="text-4xl font-bold lg:text-7xl">Wireless</h4>
            <h4 className="text-4xl font-bold text-white lg:text-7xl">
              Headphones
            </h4>
            <Button
              text="Visit Our Shop"
              className="bg-black text-white hover:bg-white hover:text-black"
              to="/shop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
