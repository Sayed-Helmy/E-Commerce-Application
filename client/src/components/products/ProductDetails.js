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
import { updateUserCart } from "../../store/cartSlice";
import ProductReview from "./ProductReview";
import ReviewForm from "./ReviewForm";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = ({ product, user }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(updateUserCart(product, +qty));
  };
  const navigator = useNavigate();
  return (
    <>
      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 px-4 pt-16 sm:px-6 md:max-w-7xl lg:px-8">
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
                className="rounded-2xl bg-gray-200"
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
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
              >
                <SwiperSlide className="cursor-pointer rounded-lg bg-gray-200">
                  <img alt="" src={product.images.mainImage} />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer rounded-lg bg-gray-200">
                  <img alt="" src={product.images.image2} />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer rounded-lg bg-gray-200">
                  <img alt="" src={product.images.image3} />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          {/* Right Side */}
          <div className="space-y-8 sm:col-span-1">
            {/* NAME */}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              {product.title}
            </h2>

            <section
              aria-labelledby="information-heading"
              className="space-y-8"
            >
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              {/* Price */}
              <p className="text-3xl font-bold text-gray-900">
                ${product.price}
              </p>

              {/* Reviews */}
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
                  <div className="mt-7 text-lg sm:mt-0">
                    <p>{product.description}</p>
                  </div>
                  {/* Stock */}
                  <div className="space-y-2">
                    <input
                      type="number"
                      min="1"
                      max={product.stock}
                      className=""
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                      placeholder="1"
                    />
                    {product.stock ? (
                      <div className="text-base ">
                        In Stock: {product.stock}
                      </div>
                    ) : (
                      <p className="text-base  ">Out Of Stock</p>
                    )}
                  </div>
                </div>
              </section>
              {/* Buttons */}
              <div className="grid w-full grid-cols-1 gap-5 self-start sm:grid-cols-2">
                <button
                  onClick={addToCartHandler}
                  className="rounded-lg bg-black px-6 py-3 text-white hover:bg-black/90"
                >
                  Add to Cart
                </button>
                <button
                  className="rounded-lg border border-black bg-white text-black hover:bg-gray-100  hover:text-black"
                  onClick={() => {
                    addToCartHandler();
                    navigator("/checkout");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* description and reviews */}
        <div className="w-full px-2 py-36 sm:px-0 ">
          <Tab.Group>
            {/* Switcher BTN */}
            <Tab.List className="mx-auto flex max-w-sm space-x-1 overflow-hidden rounded-lg border border-black">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base ",
                    selected ? "bg-black text-white shadow" : "text-black "
                  )
                }
              >
                Description
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base ",
                    selected ? "bg-black text-white shadow" : "text-black "
                  )
                }
              >
                Reviews
              </Tab>
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
                {product?.reviews.map((item) => (
                  <ProductReview key={item._id} review={item} />
                ))}
                {/* Add Comment */}
                <div className="mt-10 space-y-7 px-7 pt-7">
                  {/* Header*/}
                  <h1 className="text-3xl font-bold sm:text-5xl">
                    Add a review
                  </h1>
                  {/* Rating */}
                  {/* Form */}
                  {user ? (
                    <ReviewForm product={product} />
                  ) : (
                    <p>
                      Please
                      <Link
                        to="/SigninPage"
                        className="text-green-600 underline"
                      >
                        Login
                      </Link>
                      in order To make Review
                    </p>
                  )}
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
