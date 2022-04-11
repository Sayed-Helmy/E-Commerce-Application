import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [];
  return <div>{products && products.map((product) => <ProductItem />)}</div>;
};

export default ProductList;
