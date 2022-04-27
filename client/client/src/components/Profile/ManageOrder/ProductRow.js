import React from "react";

const ProductRow = ({ product }) => {
  const { productId, quantity } = product;
  return (
    <div className="mt-4 flex w-full  flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
      <div className="mb-4 flex w-full items-center justify-center rounded bg-white pb-6 md:w-40 md:pb-8">
        <img
          className="hidden w-full rounded md:block"
          src={productId.images.mainImage}
          alt="dress"
        />
        <img
          className="w-full rounded md:hidden"
          src={productId.images.mainImage}
          alt="dress"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-between space-y-4 border-b border-gray-200  pb-8 md:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-start justify-start space-y-2">
          <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
            {productId.title}
          </h3>
          <p className="text-sm leading-none text-gray-800">
            {productId.title}
          </p>
        </div>
        <div className="flex w-full items-start justify-between space-x-8">
          <p className="ml-2 text-base leading-6 xl:text-lg">
            ${productId.price}
          </p>
          <p className="text-base leading-6 text-gray-800 xl:text-lg">
            {quantity}
          </p>
          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">
            ${productId.price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
