import React, { useEffect, useState } from "react";
import { getUserOrders } from "../../../helpers/dataModule";

const ViewOrders = ({ product }) => {
  const [orders, setOrders] = useState();
  console.log(orders)
  useEffect(() => {
    getUserOrders().then((data) => setOrders(data));
  }, []);
  return (
        <tr className=" border-b">
            <td className="py-4 md:table-cell">
                <div className="flex flex-row items-center">
                    {/* <Link to={`/shop/${product._id}`}> */}
                        <p>
                            {orders?.[0]._id}
                        </p>
                    {/* </Link> */}
                </div>
            </td>
            <td>
                {/* <Link to={`/shop/${product._id}`}> */}
                    <p className="md:ml-4">{orders?.[0].paymentStatus}</p>
                {/* </Link> */}
            </td>
            <td className="justify-center md:justify-center mt-6">
                <p className="md:ml-4">{orders?.[0].status}</p>
            </td>
            <td className="text-right">
                <span className="text-sm font-medium">
                    {orders ? `${new Date(orders?.[0].createdAt).getDate()}/${new Date(orders?.[0].createdAt).getMonth()+1}/${new Date(orders?.[0].createdAt).getFullYear()}` : ""}
                </span>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    ${orders?.[0].totalPrice}
                </span>
            </td>
        </tr>
  );
};

export default ViewOrders;
