import React from "react";
import { useSelector } from "react-redux";
import ProductRow from "./ProductRow";
import UserDate from "./UserDate";

const ManageOrder = () => {
  const user = useSelector((state) => state.user);
  const products = user?.cart;
  console.log(products);
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 sm:px-6 md:max-w-7xl lg:px-8 ">
      <div className="item-start flex flex-col justify-start space-y-2 ">
        <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl  lg:leading-9">
          Order Summary
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch  space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex w-full flex-col items-start justify-start rounded bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
            {products.map((product) => (
              <ProductRow product={product} key={product.id} />
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
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">$56.00</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">Discount</p>
                  <p className="text-base leading-4 text-gray-600">
                    -$28.00 (50%)
                  </p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  $36.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <UserDate user={user} />
      </div>
      <div className="mt-8 flex w-full items-center justify-center rounded bg-gray-50 px-4 py-6 md:justify-start">
        <h3 className="mr-6 text-xl font-semibold leading-5 text-gray-800">
          Order status:
        </h3>
        <p>Shipped</p>
      </div>
    </div>
  );
};

export default ManageOrder;
