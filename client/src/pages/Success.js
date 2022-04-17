import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../components/ui/Button";

const Success = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-green-500">
      {/* <img src="./assets/order_placed.png" alt="order placed" /> */}
      <CheckCircleIcon className="w-40" />
      <h2 className=" mt-8 mb-20 text-3xl capitalize tracking-tight">
        your order placed successfully
      </h2>
      <Button
        text="Go to home"
        className=" bg-white text-black ring-1 ring-black hover:bg-gray-100"
        to="/"
      />
    </div>
  );
};

export default Success;
