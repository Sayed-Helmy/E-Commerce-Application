import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

const CartRow = ({ product, index }) => {
  const [productCount, setproductCount] = useState(1);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setproductCount(e.target.value);
    dispatch(cartActions.setQuantity({ product, quantity: +e.target.value }));
    dispatch(cartActions.getCount());
  };
  const handleDelete = (e) => {
    dispatch(cartActions.delProduct({ product }));
    dispatch(cartActions.getCount());
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
          <Link to={`/shop/${product.id}`}>
            <img
              src={product.imageSrc}
              className="w-20 rounded"
              alt="Thumbnail"
            />
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/shop/${product.id}`}>
          <p className=" md:ml-4">{product.name}</p>
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
