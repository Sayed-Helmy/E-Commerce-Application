import React from "react";
import saleimg from "../../assets/sale.png";
import Button from "../ui/Button";

const Sale = () => {
  return (
    <div>
      <div className="max-w-2xl px-4 mx-auto sm:px-6 md:max-w-7xl lg:px-8">
        <div className="relative grid items-center justify-center w-full grid-cols-1 my-16 bg-[#36B37E] sm:grid-cols-2 rounded-2xl">
          <div className="relative flex flex-col items-center justify-center p-2">
            <div className="absolute font-bold text-white text-7xl lg:text-9xl bottom-20">
              SALE!
            </div>
            <div className="z-10">
              <img src={saleimg} alt="" title="" className="w-72 sm:w-96" />
            </div>
          </div>
          <div className="px-4 pb-4 space-y-2 text-center sm:space-y-6 sm:text-left">
            <h4 className="text-2xl font-bold text-white sm:text-4xl lg:text-7xl">
              Products <br /> on sale now!
            </h4>
            {/* <h4 className="text-2xl font-bold text-white sm:text-4xl lg:text-7xl">on sale now!</h4> */}
            <p className="mb-5 text-white ">
              check out our shop for alot of products on sale now!
            </p>
            <Button
              text="Browse"
              className="text-black bg-white hover:bg-black hover:text-white"
              to="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
