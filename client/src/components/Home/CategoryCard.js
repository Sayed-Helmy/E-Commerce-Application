import React from "react";
import Button from "../ui/Button";

const CategoryCard = ({ category }) => {
  return (
    <div
      key={category._id}
      className={` overflow-hidden relative flex items-center justify-end group rounded-2xl ${
        category.featured && "xl:col-span-2"
      } `}
    >
      {/* <div className="w-full overflow-hidden bg-gray-200 rounded-lg max-h-96 h-26 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8"> */}
      <div className=" overflow-hidden w-full sm:h-80  flex items-center object-cover object-center ">
        <img
          src={category.image}
          alt={category.description}
          className="group-hover:opacity-75 object-cover w-full overlay"
        />
      </div>
      <div className="absolute left-0 bottom-8 space-y-4 p-4 ">
        <p className="text-xl text-white">
          {category.description.split(" ").slice(0, 2).join(" ")}
        </p>
        <h3 className="text-3xl font-bold text-white ">
          {category.name.toUpperCase()}
        </h3>
        <Button
          text="Browse"
          className="text-black bg-white hover:bg-black hover:text-white"
          to="/categories"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
