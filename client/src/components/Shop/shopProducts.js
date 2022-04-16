import React from "react";
import { useSelector } from "react-redux";
import Product from "../Home/Product";

const ShopProducts = () => {
  const products = useSelector((state) => state.products.featured);
  return (
    <div>
      <div>
        {/* Shop products */}
        <div className="col-span-3 ">
          <div className="max-w-2xl px-2 md:max-w-5xl pb-28">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
