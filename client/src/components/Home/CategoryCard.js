import React from "react";

const CategoryCard = ({ product }) => {
  return (
    <a key={product.id} href={product.href} className=" group  ">
      {/* <div className="w-full max-h-96 h-26 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"> */}
      <div className="max-h-80 h-80 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </a>
  );
};

export default CategoryCard;
