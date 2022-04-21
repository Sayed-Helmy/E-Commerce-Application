import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../../helpers/dataModule";
import ProductRow from "./ProductRow";
import UserDate from "./UserDate";

const ManageOrder = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();
  useEffect(() => {
    getUserOrders().then((data) => setOrders(data));
  }, []);
  return (
    <>
      {orders?.length > 0 ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:max-w-7xl lg:px-8 ">
          <div className="item-start flex flex-col justify-start space-y-2 ">
            <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl  lg:leading-9">
              Order Summary
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              {new Date(orders[0]?.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch  space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
            <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex w-full flex-col items-start justify-start rounded bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
                {orders[0]?.products?.map((product) => (
                  <ProductRow product={product} key={product._id} />
                ))}
              </div>
              {/*product summary need state still */}
              <div className="flex w-full flex-col items-stretch justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex w-full flex-col space-y-6 rounded bg-gray-50  px-4 py-6 md:p-6 xl:p-8   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                    <div className="flex w-full  justify-between">
                      <p className="text-base leading-4 text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        ${orders[0].priceSubtotal}
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-base leading-4 text-gray-800">
                        Discount
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        -${orders[0].amountDiscount} (
                        {(orders[0].totalPrice / orders[0].priceSubtotal) * 100}
                        %)
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-base leading-4 text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-4 text-gray-600">Free</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                      ${orders[0].totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <UserDate user={user} order={orders[0]} />
          </div>
          <div className="mt-8 flex w-full items-center justify-center rounded bg-gray-50 px-4 py-6 md:justify-start">
            <h3 className="mr-6 text-xl font-semibold leading-5 text-gray-800">
              Order status:
            </h3>
            <p className="rounded-lg bg-green-300 px-3">{orders[0].status}</p>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-2xl items-center justify-center px-4 py-28 sm:px-6 md:max-w-7xl lg:px-8">
          <p className="text-5xl font-bold">There is No Active Orders</p>
        </div>
      )}
    </>
  );
};

export default ManageOrder;
