import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUserCart } from "../../store/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(updateUserCart(product, +qty));
    toast.success("product added to cart", {
      autoClose: 1500,
    });
  };
  return (
    <div>
      <Link key={product._id} to={`/shop/${product._id}`} className="group">
        <div className="h-72 max-h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-black/20 to-[#f4f4f4] sm:max-h-72">
          <img
            src={product.images.mainImage}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </Link>
      <div className="group space-y-3 text-center font-bold sm:text-left">
        <p className="mt-2 inline-block rounded-lg bg-[#F4F4F4] py-1 px-3 text-sm	">
          {product.category}
        </p>
        <button
          onClick={addToCartHandler}
          className="w-full rounded-lg bg-black/10 px-3 py-1 font-bold text-black "
        >
          Add to Cart
        </button>
        <p className="text-[1.4rem] ">{product.title}</p>
        <div className="relative  overflow-hidden">
          <p className="text-lg ">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
