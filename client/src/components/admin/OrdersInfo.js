import React from "react";
import OrderDropdown from "./OrderDropdown";
import ProductRow from "../Profile/ManageOrder/ProductRow";

const OrdersInfo = () => {
  console.log("loop");
  return (
    <div>
      <form className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:space-y-0">
        {/* ================================== 
            ==================================*/}
        <div className=" col-span-1 space-y-4">
          {/* order id */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">Order ID</p>
            <p>skladhjkashfasfashf390848r324</p>
          </div>
          {/* User */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap	 rounded-l-lg bg-black py-1 px-3 text-white	">User</p>
            <p>customer@gmail.com</p>
          </div>
          {/* price */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">Total Price</p>
            <p>399$</p>
          </div>
          {/* Status */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">Status</p>
            <p>
              <OrderDropdown />
            </p>
          </div>
          {/* Pay Status */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">Pay Status</p>
            <p>
              <OrderDropdown />
            </p>
          </div>
        </div>
        {/* ================================== 
            ==================================*/}
        <div className=" col-span-1 space-y-4">
          {/* Carrier */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">Carrier</p>
            <p>
              <OrderDropdown />
            </p>
          </div>
          {/* Address and Tracking */}
          <div className="my-5 w-full space-y-2 rounded-md bg-gray-200 p-3 text-sm sm:text-base">
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Address :</p>
              <p> cairo, cairo, sjhdhj</p>
            </div>
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Tracking :</p>
              <p> 2348656654123168161456</p>
            </div>
          </div>
          {/* Dates */}
          <div className="my-5 w-full space-y-2 rounded-md bg-gray-200 p-3 text-sm sm:text-base">
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Created At :</p>
              <p> cairo, cairo, sjhdhj</p>
            </div>
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Delivery Date :</p>
              <p> 2348656654123168161456</p>
            </div>
          </div>
        </div>
        {/* ================================== 
            ==================================*/}
        <div className=" col-span-1 space-y-4 pt-10">
          <h3 className="w-24 whitespace-nowrap	 rounded-l-lg bg-black py-1 px-3 text-white	">Products</h3>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default OrdersInfo;
