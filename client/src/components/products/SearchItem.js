import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ product, showResult }) => {
  return (
    <Link onClick={() => showResult(false)} to={`/shop/${product._id}`}>
      <div className="mb-2 flex cursor-pointer items-center justify-between hover:bg-gray-200">
        <img
          src={product.image}
          alt="search Icon"
          className="w-36 py-2 pl-16"
        />
        <p className="px-16	py-2	text-lg font-bold text-blue-800">
          {product.title}
        </p>
        <p className="py-2	pr-16	text-lg font-bold text-blue-800">
          $ {product.price}
        </p>
      </div>
    </Link>
  );
};

export default SearchItem;
