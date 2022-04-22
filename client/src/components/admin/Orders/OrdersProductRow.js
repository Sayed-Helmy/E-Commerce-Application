import React from "react";

const OrdersProductRow = () => {
  return (
    <div className="mt-4 flex w-full  flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
      <div className="mb-4 flex w-full items-center justify-center rounded bg-white pb-6 md:w-40 md:pb-8">
        <img className="hidden w-full rounded md:block" alt="dress" />
        <img className="w-full rounded md:hidden" alt="dress" />
      </div>
      <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200 pb-8  text-white md:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-2">
          <h3 className="text-xl font-semibold leading-6  xl:text-2xl">Beats Studio3 Wireless headphones</h3>
          <p className="text-sm leading-none ">Beats Studio3 Wireless headphones</p>
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
