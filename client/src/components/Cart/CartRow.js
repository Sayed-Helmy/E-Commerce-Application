import React, { useState } from "react";

const CartRow = ({ product, index }) => {
  const [productCount, setproductCount] = useState(1);
  const handleChange = (e) => setproductCount(e.target.value);
  return (
    <tr className=" border-b">
      <td className="hidden py-4 md:table-cell ">
        <a href="#">
          <img src={product.imageSrc} class="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>
      <td>
        <a href="#">
          <p className=" md:ml-4">{product.name}</p>
        </a>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
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
