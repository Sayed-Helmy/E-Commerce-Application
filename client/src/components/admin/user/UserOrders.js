import React, { useEffect } from "react";
import ViewOrders from "../table/ViewOrders";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../../helpers/dataModule";

const UserOrders = ({ user }) => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    getUserOrders().then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <h3 className=" mb-6 text-2xl font-bold leading-6 text-gray-900">{user?.name}'s Orders</h3>
      <table className="mb-5 w-full table-auto text-sm lg:text-base" cellSpacing="0">
        <thead>
          <tr className="h-12 border-b capitalize ">
            {/* <th className="hidden md:table-cell"></th> */}
            <th className="text-left">Order</th>
            <th className="pl-5 text-left lg:pl-0 lg:text-right">
              <span className="lg:hidden" title="Quantity">
                Qtd
              </span>
              <span className="hidden lg:inline">Payment</span>
            </th>
            <th className="hidden md:table-cell">Status</th>
            <th className="hidden md:table-cell">Created at</th>
            <th className="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>{orders && <ViewOrders orders={orders} />}</tbody>
      </table>
    </div>
  );
};

export default UserOrders;
