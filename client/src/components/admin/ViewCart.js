import React from "react";
import { Link } from "react-router-dom";

const ViewCart = ({ product, index }) => {
  return (
    <tr className=" border-b">
      <td className="py-4 md:table-cell">
        <div className="flex flex-row items-center">
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
        <p> {product.quantity} </p>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">
          ${product.price}
        </span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          ${product.quantity * product.price}
        </span>
      </td>
    </tr>
  );
};

export default ViewCart;
