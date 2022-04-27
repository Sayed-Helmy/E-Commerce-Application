import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserCart } from "../../store/cartSlice";

const CartRow = ({ product, index }) => {
  const [productCount, setproductCount] = useState(product.quantity);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setproductCount(e.target.value);
    dispatch(updateUserCart(product, +e.target.value));
  };
  const handleDelete = (e) => {
    dispatch(updateUserCart(product, 0));
  };
  return (
    <tr className=" border-b">
      <td className="py-4 md:table-cell">
        <div className="flex flex-row items-center">
          <span>
            <XCircleIcon
              className="w-4 mr-2 cursor-pointer"
              onClick={handleDelete}
            />
          </span>
          <Link to={`/shop/${product._id}`}>
            <img
              src={product.images.mainImage}
              className="w-20 rounded"
              alt="Thumbnail"
            />
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/shop/${product._id}`}>
          <p className=" md:ml-4">{product.title}</p>
        </Link>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              min={0}
              value={productCount}
              onChange={handleChange}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">
          ${product.price}
        </span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          ${productCount * product.price}
        </span>
      </td>
    </tr>
  );
};

export default CartRow;
