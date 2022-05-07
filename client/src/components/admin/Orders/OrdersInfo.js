import React, { useState } from "react";
import OrderDropdown from "./OrderDropdown";
import OrdersPriceDisclosure from "./OrdersPriceDisclosure";
import OrdersProductsDisclosure from "./OrdersProductsDisclosure";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adminActions } from "../../../store/adminSlice";
import { toast } from "react-toastify";

const OrdersInfo = ({ order, setIsOpen }) => {
  const [orderStatus, setOrderStatus] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:5000/api/v1/orders/${order._id}`,
        {
          status: orderStatus,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(adminActions.updateOrder(res.data));
        toast.success("Order State Has Been Changed Successfully!", {
          autoClose: 1500,
        });
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          autoClose: 1500,
        });
      });
  };
  return (
    <div>
      <form
        className="mt-10 grid grid-cols-4 gap-4 md:space-y-0"
        onSubmit={submitHandler}
      >
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
            <div className="flex gap-2 align-baseline">
              <OrderDropdown
                status={order.status}
                onChange={(e) => setOrderStatus(e.name)}
                options={[
                  { name: "Pending" },
                  { name: "in Review" },
                  { name: "in progress" },
                  { name: "canceled" },
                  { name: "on the way" },
                  { name: "deliverd" },
                ]}
              />
              {order.status}
            </div>
          </div>
          {/* Pay Status */}
          <div className="flex items-center space-x-2 text-sm sm:space-x-5 sm:text-base">
            <p className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
              Pay Status
            </p>
            <div>{order.paymentStatus}</div>
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
              <OrderDropdown options={[{ name: "DHL" }, { name: "Armex" }]} />
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
