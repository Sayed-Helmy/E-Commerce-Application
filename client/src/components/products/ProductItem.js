import React from "react";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return <div>ProductItem</div>;
};

export default ProductItem;
