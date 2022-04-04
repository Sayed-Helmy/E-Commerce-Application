import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <a key={product.id} href={product.href} className="group">
        <div className="w-full overflow-hidden bg-gradient-to-br from-black/20 to-[#f4f4f4] rounded-2xl max-h-56 sm:max-h-72 h-72">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover object-center w-full h-full group-hover:opacity-75"
          />
        </div>
        </a>
        <div className="space-y-3 font-bold text-center sm:text-left">
          <h3 className="mt-2 text-sm bg-[#F4F4F4] inline-block py-1 px-3 rounded-lg	">{product.category}</h3>
          <h1 className="text-xl ">{product.name}</h1>
          <p className="text-2xl ">{product.price}</p>
        </div>
    </div>
  );
};

export default Product;
