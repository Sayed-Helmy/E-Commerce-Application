import React from "react";
import Button from "../ui/Button";

const CategoryCard = ({ category }) => {
  return (
    <a key={category.id} href={category.href} className={` relative flex items-center justify-end group rounded-2xl ${category.gridClass} ${category.colorGradient}`} >
      {/* <div className="w-full overflow-hidden bg-gray-200 rounded-lg max-h-96 h-26 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8"> */}
      <div className=" overflow-hidden sm:h-80 flex items-center">
        <img
          src={category.imageSrc}
          alt={category.imageAlt}
          className=" object-cover object-center w-full h-56 group-hover:opacity-75 ml-16"
        />
      </div>
      <div className="absolute left-4 bottom-8 space-y-7">
        <p className="text-xl text-white">{category.desc}</p>
        <h3 className="text-3xl font-bold text-white">{category.name}</h3>
        <Button text="Browse" className="text-black bg-white hover:bg-black hover:text-white" to="#" />
      </div>
    </a>
  );
};

export default CategoryCard;
