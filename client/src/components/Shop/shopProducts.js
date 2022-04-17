import React from "react";
import { useSelector } from "react-redux";
import Product from "../Home/Product";

const ShopProducts = () => {
  const products = useSelector((state) => state.products.filtered);
  console.log(products);
  return (
    <div>
      <div>
        {/* Shop products */}
        <div className="col-span-3 ">
          <div className="max-w-2xl px-2 pb-28 md:max-w-5xl">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products &&
                products.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
