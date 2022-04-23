import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../../helpers/dataModule";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const product = await axios.post("http://localhost:5000/api/v1/products", formData, {
        withCredentials: true,
      });
      console.log(product);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="mx-auto w-fit py-5 px-2 sm:my-7">
      <h3 className="mb-7 text-3xl font-bold">Create Product</h3>
      <form onSubmit={submitHandler} className="grid grid-cols-1  gap-5 rounded-2xl border-2 py-10 px-3 sm:px-10 md:grid-cols-2 md:space-x-16">
        {/* left side */}
        <div className="col-span-2 space-y-4 md:col-span-1">
          {/* Title */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-title" className="w-28">
              Title
            </label>
            <input type="text" name="title" id="prod-title" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
          </div>
          {/* Description */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-description" className="w-28">
              Description
            </label>
            <textarea type="text" id="prod-description" name="description" rows="2" cols="20" className=" w-60 rounded-md focus:border-black/50 focus:ring-black/50"></textarea>
          </div>
          {/* RichDescription */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-richDescription" className="w-28">
              RichDescription
            </label>
            <textarea type="text" id="prod-richDescription" name="richDescription" rows="5" cols="18" className=" w-60 rounded-md focus:border-black/50 focus:ring-black/50"></textarea>
          </div>
          {/* Price */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-price" className="w-28">
              Price
            </label>
            <input type="text" name="price" id="prod-price" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
          </div>
          {/* OnSale */}
          <div className="flex items-center justify-start space-x-2 sm:space-x-4">
            <label htmlFor="prod-onSale" className="w-28">
              OnSale
            </label>
            <div>
              <input type="checkbox" value={true} name="onSale" id="prod-onSale" className="rounded-full ring-2" />
            </div>
          </div>

          {/* OnSalePrice */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-onSalePrice" className="w-28">
              OnSalePrice
            </label>
            <input type="text" name="onSalePrice" id="prod-onSalePrice" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
          </div>
        </div>
        {/* right side */}
        <div className="col-span-2 space-y-4  md:col-span-1">
          {/* IsFeatured */}
          <div className="flex items-center justify-start space-x-2 sm:space-x-4">
            <label htmlFor="prod-isFeatured" className="w-28">
              IsFeatured
            </label>
            <div className="">
              <input type="checkbox" value={true} name="isFeatured" id="prod-isFeatured" className="rounded-full ring-2" />
            </div>
          </div>
          {/* Brand */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-brand" className="w-28">
              Brand
            </label>
            <input type="text" name="brand" id="prod-brand" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
          </div>

          {/* Stock */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="prod-stock" className="w-28">
              Stock
            </label>
            <input type="text" name="stock" id="prod-stock" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
          </div>
          {/* Images */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label htmlFor="prod-mainImage" className="w-28">
                Main-Image
              </label>
              <input type="file" name="mainImage" id="prod-mainImage" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label htmlFor="prod-image2" className="w-28">
                Image-2
              </label>
              <input type="file" name="image2" id="prod-image2" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label htmlFor="prod-image3" className="w-28">
                Image-3
              </label>
              <input type="file" name="image3" id="prod-image3" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label htmlFor="prod-image4" className="w-28">
                Image-4
              </label>
              <input type="file" name="image4" id="prod-image4" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>
          </div>
          {/* Category */}
          <div className="flex items-center justify-start space-x-2 sm:space-x-4">
            <label htmlFor="prod-category" className="w-28">
              Category
            </label>
            <select name="category" id="prod-category" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm">
              {categories &&
                categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {/* Submit */}
        <div className="col-span-2 mt-4">
          <button type="submit" className="float-right w-32 cursor-pointer rounded-md border border-transparent bg-black px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
