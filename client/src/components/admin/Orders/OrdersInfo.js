import React from "react";
import OrderDropdown from "./OrderDropdown";
import OrdersPriceDisclosure from "./OrdersPriceDisclosure";
import OrdersProductsDisclosure from "./OrdersProductsDisclosure";

const OrdersInfo = ({ order }) => {
  // const submitHandler = async () => {};
  return (
    <div>
      <form className="mt-10 grid grid-cols-4 gap-4 md:space-y-0">
        {/* ================================== 
            ==================================*/}
        <div className="col-span-4 space-y-4 md:col-span-2">
          {/* order id */}
          <div className="flex items-center space-x-2 text-sm text-black sm:space-x-5 sm:text-base ">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
              Order ID
            </p>
            <p>{order._id}</p>
          </div>
          {/* User */}
          <div className="flex items-center space-x-2 text-sm text-black sm:space-x-5 sm:text-base ">
            <p className="w-24 whitespace-nowrap	 rounded-l-lg bg-black py-1 px-3 text-white	">
              User
            </p>
            <p>{order.user.email}</p>
          </div>
          {/* Status */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
              Status
            </p>
            <div>
              <OrderDropdown status={order.status} />
            </div>
          </div>
          {/* Pay Status */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
              Pay Status
            </p>
            <div>
              <OrderDropdown status={order.status} />
            </div>
          </div>
          {/*  Price */}
          <div className="flex items-center space-x-2 text-sm text-white sm:space-x-5 sm:text-base">
            <div className="flex items-center space-x-2 sm:space-x-5">
              <OrdersPriceDisclosure order={order} />
            </div>
          </div>
        </div>
        {/* ================================== 
            ==================================*/}
        <div className="col-span-4 space-y-4 md:col-span-2">
          {/* Carrier */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
              Carrier
            </p>
            <div>
              <OrderDropdown />
            </div>
          </div>
          {/* Address and Tracking */}
          <div className="my-5 w-full space-y-2 rounded-md border-2 border-white bg-slate-200 p-3 text-sm sm:text-base">
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Address :</p>
              <p>
                {order.shipping.address.street}/{order.shipping.address.city}/
                {order.shipping.address.state}/{order.shipping.address.country}
              </p>
            </div>
            <div className="flex ">
              <p className="w-28 whitespace-nowrap">Tracking :</p>
              <p> {order.shipping.tracking}</p>
            </div>
          </div>
          {/* Dates */}
          <div className="my-5 w-full space-y-2 rounded-md border-2 border-white bg-slate-200 p-3 text-sm sm:text-base">
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Created At :</p>
              <p> {order.createdAt}</p>
            </div>
            <div className="flex">
              <p className="w-28 whitespace-nowrap">Delivery Date :</p>
              <p> {order.shipping.deliveryDate}</p>
            </div>
          </div>
        </div>
        {/* ================================== 
      ==================================*/}
        <div className="col-span-4 space-y-4 ">
          <div className="flex items-center space-x-2 sm:space-x-5">
            <OrdersProductsDisclosure order={order} />
          </div>
        </div>
        {/* ================================== 
          ==================================*/}
        <div className="col-span-4">
          <button
            type="submit"
            className=" float-right w-40 rounded-md bg-black py-2 px-4 text-white hover:bg-black hover:text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrdersInfo;
