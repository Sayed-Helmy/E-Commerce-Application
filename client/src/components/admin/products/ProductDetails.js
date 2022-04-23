import React, { useEffect, useState } from "react";
import { getCategories } from "../../../helpers/dataModule";
import AdminProduct from "../../Home/Product";

const ProductDetails = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const Product = {
    _id: "625566594ef84e43925deab0",
    title: "Beats Solo3 Wireless On-Ear",
    description: "The Beats Watch Series 7 has a bigger, brighter, and tougher display that extends to the edge of the device. There isn't any flashy new gimmick or headlining health feature in this model, but there are still a handful of changes worth exploring.",
    richDescription:
      "The Beats Watch Series 7 has a bigger, brighter, and tougher display that extends to the edge of the device. There isn't any flashy new gimmick or headlining health feature in this model, but there are still a handful of changes worth exploring. New colors, faster charging, and exclusive edge-to-edge watch faces add up to an iterative yet desirable upgrade.",
    images: {
      mainImage: "/uploads/mainImage-1649763929028.png",
      image2: "/uploads/image2-1649763929031.png",
      image3: "/uploads/image3-1649763929034.png",
      image4: "/uploads/image4-1649763929037.png",
    },
    brand: "Beats",
    price: 200,
    onSalePrice: 190,
    isFeatured: true,
    onSale: false,
    stock: 100,
    rating: 3.3,
    reviews: [
      {
        user: "62553649775afd5a2dc8b839",
        message: "cc",
        rating: 5,
        _id: "62553649775afd5a2dc8b839",
        createdAt: "2022-04-18T15:11:29.786Z",
        updatedAt: "2022-04-18T15:11:29.786Z",
        name: "mohamed",
        email: "mrokam@gmail.com",
        avatar: "/uploads/Default-avatar.jpg",
      },
      {
        name: "mohamed",
        avatar: "/uploads/Default-avatar.jpg",
        email: "mrokam@gmail.com",
        message: "zzz",
        rating: 1,
        _id: "62553649775afd5a2dc8b839",
        createdAt: "2022-04-18T14:19:54.391Z",
        updatedAt: "2022-04-18T14:19:54.391Z",
      },
      {
        user: "625527eead07d2917e9bb7fa",
        message: "good Product!",
        rating: 4,
        _id: "625527eead07d2917e9bb7fa",
        createdAt: "2022-04-18T14:19:18.452Z",
        updatedAt: "2022-04-18T14:19:18.452Z",
        name: "Sayed Helmy",
        email: "Master5@gmail.com",
        avatar: "/uploads/avatar-1650471380548.jpg",
      },
    ],
    createdAt: "2022-04-12T11:45:29.049Z",
    category: "Headphones",
  };
  return (
    <div>
      <form className=" px-2 ">
        <div className=" mx-auto w-fit space-y-10 py-10 sm:mt-3">
          <div className="flex items-center space-x-10">
            <h4 className="text-center text-2xl font-bold sm:text-3xl  md:text-left">{Product.title}</h4>
            <a href="" className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black p-2 text-white md:h-12 md:w-12">
              <span>+</span>
            </a>
          </div>

          <div className=" grid grid-cols-6 gap-4">
            {/* firct column */}
            <div className=" col-span-6 mx-auto flex w-80 items-center justify-center space-y-7 py-10 px-2 sm:mt-8 sm:w-fit xl:col-span-2">
              <div>
                <AdminProduct product={Product} />
              </div>
            </div>

            {/* second column */}
            <div className="col-span-6 space-y-4 rounded-2xl border-2 py-10 px-3 md:col-span-3 md:px-4  xl:col-span-2 xl:px-8">
              {/* _id */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  ID
                </label>
                <p>{Product._id}</p>
              </div>
              {/* name */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Name
                </label>
                <input type="text" placeholder={Product.title} id="cat-name" name="name" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
              </div>
              {/* description */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Description
                </label>
                <textarea id="" name="description" rows="4" cols="20" className=" w-60  rounded-md focus:border-black/50 focus:ring-black/50">
                  {Product.description}
                </textarea>
              </div>
              {/* richDescription */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  rich-Desc
                </label>
                <textarea id="" name="richDescription" rows="5" cols="20" className=" w-60  rounded-md focus:border-black/50 focus:ring-black/50">
                  {Product.richDescription}
                </textarea>
              </div>
              {/* price */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Price
                </label>
                <input type="text" placeholder={Product.price} id="cat-name" name="price" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
              </div>
              {/* OnSale */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  OnSale
                </label>
                <input type="checkbox" value={Product.onSale} id="cat-featured" name="onSale" className="rounded-full ring-2" />
              </div>
              {/* OnSale price */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-2 text-white">
                  onSalePrice
                </label>
                <input type="text" placeholder={Product.onSalePrice} id="cat-name" name="onSalePrice" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
              </div>
            </div>

            {/* third column */}
            <div className="col-span-6 space-y-4 rounded-2xl border-2 py-10 px-1 sm:px-10 md:col-span-3 xl:col-span-2">
              {/* category */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="prod-category" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Category
                </label>
                <select name="category" defaultValue={Product.category} id="prod-category" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm">
                  {categories &&
                    categories.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              {/* brand */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Brand
                </label>
                <input type="text" placeholder={Product.brand} id="cat-name" name="brand" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
              </div>
              {/* stock */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Stock
                </label>
                <input type="text" placeholder={Product.stock} id="cat-name" name="stock" className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0" />
              </div>
              {/* isFeatured */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  isFeatured
                </label>
                <input type="checkbox" value={Product.isFeatured} id="cat-featured" name="isFeatured" className="rounded-full ring-2" />
              </div>
              {/* image */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  mainImage
                </label>
                <div className="relative flex items-center">
                  <img src={Product.images.mainImage} type="file" id="cat-Image" alt={Product.images.mainImage} name="mainImage" className="h-12 w-12 rounded-full border-2 border-gray-300 " />
                  <input type="file" className="absolute left-0 w-12 opacity-0 " />
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  image2
                </label>
                <div className="relative flex items-center">
                  <img src={Product.images.image2} type="file" id="cat-Image" alt={Product.images.image2} name="image2" className="h-12 w-12 rounded-full border-2 border-gray-300 " />
                  <input type="file" className="absolute left-0 w-12 opacity-0 " />
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  image3
                </label>
                <div className="relative flex items-center">
                  <img src={Product.images.image3} type="file" id="cat-Image" alt={Product.images.image3} name="image3" className="h-12 w-12 rounded-full border-2 border-gray-300 " />
                  <input type="file" className="absolute left-0 w-12 opacity-0 " />
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  image4
                </label>
                <div className="relative flex items-center">
                  <img src={Product.images.image4} type="file" id="cat-Image" alt={Product.images.image4} name="image4" className="h-12 w-12 rounded-full border-2 border-gray-300 " />
                  <input type="file" className="absolute left-0 w-12 opacity-0 " />
                </div>
              </div>
              {/* button */}
              <div className="flex justify-end pt-5">
                <button type="submit" className=" w-32 cursor-pointer rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
