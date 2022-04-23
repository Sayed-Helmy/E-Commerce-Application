import React from "react";
import CategoryCard from "../../Home/CategoryCard";

const CategoryDetails = () => {
  const category = {
    _id: "625554689667e91cfd60ac7e",
    name: "Headphones",
    description: "Enjoy With our Headphones Category",
    image: "/uploads/image-1649759336567.png",
    featured: false,
    createdAt: "2022-04-12T10:28:56.570Z",
    updatedAt: "2022-04-12T10:28:56.570Z",
    order: 0,
  };

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 mx-auto flex w-80 items-center justify-center space-y-7 py-10 px-2 sm:mt-8 sm:w-fit lg:col-span-1">
        <div>
          <CategoryCard category={category} />
        </div>
      </div>
      {/* Edit */}
      <div className="col-span-2 mx-auto w-fit space-y-7 py-10 sm:mt-8 lg:col-span-1">
        <div className="flex items-center justify-between">
          <h4 className="text-center text-2xl font-bold  sm:text-3xl  md:text-left">
            <span className="text-gray-400">Category : </span>
            {category.name}
          </h4>
          <a href="" className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-black p-2 text-white">
            <span>+</span>
          </a>
        </div>
        <form className="space-y-5 rounded-2xl border-2 py-10 px-1 sm:px-10">
          {/* _id */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              ID
            </label>
            <p>{category._id}</p>
          </div>
          {/* name */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              Name
            </label>
            <input type="text" placeholder={category.name} id="cat-name" name="name" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
          </div>
          {/* description */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              Description
            </label>
            <textarea id="" name="description" rows="2" cols="20" className=" w-60  rounded-md focus:border-black/50 focus:ring-black/50">
              {category.description}
            </textarea>
          </div>
          {/* image */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              Image
            </label>
            <div className="relative flex items-center">
              <img src={category.image} type="file" id="cat-Image" alt={category.image} name="image" className="w-12 rounded-full border-2 border-gray-300 " />
              <input type="file" className="absolute left-0 w-20 opacity-0 " />
            </div>
          </div>
          {/* featured */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              Featured
            </label>
            <input type="checkbox" value={category.featured} id="cat-featured" name="featured" className="rounded-full ring-2" />
          </div>
          {/* order */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white">
              Order
            </label>
            <input type="text" placeholder={category.order} id="cat-name" name="order" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
          </div>
          {/* button */}
          <div className="flex justify-end pt-5">
            <button type="submit" className=" w-32 cursor-pointer rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryDetails;
