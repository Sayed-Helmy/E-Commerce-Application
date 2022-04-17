import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Tab } from "@headlessui/react";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { updateUserCart } from "../../store/cartSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = ({ product, user }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(updateUserCart(product, 1));
  };
  return (
    <>
      <div className="grid w-full max-w-2xl grid-cols-1 px-4 pt-16 mx-auto sm:px-6 md:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:gap-x-16">
          {/*  Slider */}
          <div className="space-y-4 sm:col-span-1">
            <>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000000",
                  "--swiper-pagination-color": "#000000",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="bg-gray-200 rounded-2xl"
              >
                <SwiperSlide className="cursor-pointer">
                  <img alt="" src={product.images.mainImage} />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img alt="" src={product.images.image2} />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img alt="" src={product.images.image3} />
                </SwiperSlide>
              </Swiper>
              <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="">
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src={product.images.mainImage} />
                </SwiperSlide>
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src={product.images.image2} />
                </SwiperSlide>
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src={product.images.image3} />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          {/* Right Side */}
          <div className="space-y-8 sm:col-span-1">
            {/* NAME */}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">{product.title}</h2>

            <section aria-labelledby="information-heading" className="space-y-8">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              {/* Price */}
              <p className="text-gray-900 text-3xl font-bold">${product.price}</p>

              {/* Reviews */}
              <div>
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon key={rating} className={classNames(product.rating > rating ? "text-gray-900" : "text-gray-400", "h-5 w-5 flex-shrink-0")} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  {product.reviews.length} reviews
                </div>
              </div>
            </section>

            <div className="space-y-8 ">
              <section aria-labelledby="options-heading" className="">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
                <div className=" space-y-8">
                  <div className="text-lg mt-7 sm:mt-0">
                    <p>{product.description}</p>
                  </div>
                  {/* Stock */}
                  {product.stock ? <div className="text-base ">In Stock: {product.stock}</div> : <p className="text-base  ">Out Of Stock</p>}
                </div>
              </section>
              {/* Buttons */}
              <div className="grid self-start w-full sm:grid-cols-2 grid-cols-1 gap-5">
                <button onClick={addToCartHandler} className="px-6 py-3 rounded-lg text-white bg-black hover:bg-black/90">
                  Add to Cart
                </button>
                <Button text="Buy Now" className="text-black bg-white border border-black hover:bg-gray-100  hover:text-black" to="#" />
              </div>
            </div>
          </div>
        </div>

        {/* description and reviews */}
        <div className="w-full px-2 py-36 sm:px-0 ">
          <Tab.Group>
            {/* Switcher BTN */}
            <Tab.List className="flex max-w-sm mx-auto space-x-1 border border-black rounded-lg overflow-hidden">
              <Tab className={({ selected }) => classNames("w-full py-2.5 text-base ", selected ? "bg-black shadow text-white" : "text-black ")}>Description</Tab>
              <Tab className={({ selected }) => classNames("w-full py-2.5 text-base ", selected ? "bg-black shadow text-white" : "text-black ")}>Reviews</Tab>
            </Tab.List>

            {/* Description */}
            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-16 space-y-5 text-left ">
                  <h2 className="text-2xl ">Description</h2>
                  <hr className="border-black" />
                  <p>{product.richDescription}</p>
                </div>
              </Tab.Panel>

              {/* Reviews */}
              <Tab.Panel>
                {/* Comment */}
                <div className="px-8 pb-16 mt-16 bg-[#ECECEC] rounded-2xl sm:px-7 pt-7 ">
                  {/* Header */}
                  <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row">
                    {/* account */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                      <img className="w-10 h-10 bg-gray-500 rounded-full mb-4 md:mb-0" alt="reviewer pic" src={user?.avatar}></img>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">{user?.name}</h3>
                        <p className="text-base ">added at : 10 march 2022</p>
                      </div>
                    </div>
                    {/* rating */}
                    <div>
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon key={rating} className={classNames(product.rating > rating ? "text-gray-900" : "text-gray-400", "h-5 w-5 flex-shrink-0")} aria-hidden="true" />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-3 mb-6 border-black" />
                  <p className="text-base ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                {/* Add Comment */}
                <div className="mt-16 px-7 pt-7 space-y-7">
                  {/* Header*/}
                  <h1 className="text-3xl font-bold sm:text-5xl">Add a review</h1>
                  {/* Rating */}
                  {/* <div className="flex flex-row items-center space-x-3 -mt-4">
                    <div>Your Rating</div>
                    <div>
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product.rating > rating
                                  ? "text-gray-900"
                                  : "text-gray-400",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                      </div>
                    </div>
                  </div>
                  */}
                  {/* Form */}
                  <form className="space-y-7">
                    <div className="flex flex-row items-center space-x-3">
                      <div>Your Rating</div>
                      <div></div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="w3review" className="">
                        Your Review:
                      </label>
                      <textarea rows="4" cols="50" placeholder="Type your review..." className="max-w-md p-3 border border-black rounded-lg"></textarea>
                    </div>

                    <button type="submit" form="" value="Submit" className="px-5 py-2 text-white bg-black rounded-lg ">
                      Submit
                    </button>
                  </form>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
