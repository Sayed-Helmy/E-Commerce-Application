import React from "react";

const OrdersProductRow = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-start bg-slate-200 px-4 pt-4 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
      <div className="mb-4 flex h-20  w-20 items-center justify-center rounded  bg-slate-100 pb-6 md:pb-8">
        <img
          className=" hidden rounded object-cover object-center md:block"
          alt="dress"
          src="../../../assets/best-seller-2.png"
        />
        <img
          className="rounded object-cover object-center md:hidden"
          alt="dress"
          src="../../../assets/best-seller-2.png"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200 pb-4  text-black md:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-2">
          <h3 className="text-lg font-semibold leading-6  xl:text-lg">
            Beats Studio3 Wireless headphones
          </h3>
          <p className="text-sm leading-none ">
            Beats Studio3 Wireless headphones
          </p>
        </div>
        <div className="flex w-full items-start justify-between space-x-8">
          <p className="ml-2 text-base leading-6 xl:text-lg">$310</p>
          <p className="text-base leading-6  xl:text-lg">1</p>
          <p className="text-base font-semibold leading-6  xl:text-lg">$310</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersProductRow;
