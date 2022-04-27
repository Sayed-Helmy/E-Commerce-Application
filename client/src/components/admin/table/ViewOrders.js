import React from "react";

const ViewOrders = ({ orders }) => {
  console.log(orders);
  return (
    <tr className=" border-b">
      <td className="py-4 md:table-cell">
        <div className="flex flex-row items-center">
          {/* <Link to={`/shop/${product._id}`}> */}
          <p>{orders?.[0]._id}</p>
          {/* </Link> */}
        </div>
      </td>
      <td>
        {/* <Link to={`/shop/${product._id}`}> */}
        <p className="md:ml-4">{orders?.[0].paymentStatus}</p>
        {/* </Link> */}
      </td>
      <td className="mt-6 justify-center md:justify-center">
        <p className="md:ml-4">{orders?.[0].status}</p>
      </td>
      <td className="text-right">
        <span className="text-sm font-medium">
          {orders
            ? `${new Date(orders?.[0].createdAt).getDate()}/${
                new Date(orders?.[0].createdAt).getMonth() + 1
              }/${new Date(orders?.[0].createdAt).getFullYear()}`
            : ""}
        </span>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm font-medium lg:text-base">
          ${orders?.[0].totalPrice}
        </span>
      </td>
    </tr>
  );
};

export default ViewOrders;
