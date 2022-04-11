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
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "White EliteBook Tablet  ",
    price: "900$",
    rating: 5.9,
    reviewCount: 33,
    inStock: 17,
    href: "shop/product1",
    imageSrc: "/assets/best-seller-1.png",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    category: "HEADPHONES",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "product2",
    price: "$35",
    category: "HEADPHONES",
    rating: 4.9,
    reviewCount: 71,
    inStock: 0,
    imageSrc: "/assets/best-seller-2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    category: "laptop",
    inStock: 13,
    reviewCount: 117,
    rating: 2.5,
    imageSrc: "/assets/best-seller-3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    inStock: 130,
    reviewCount: 11,
    rating: 3.5,
    imageSrc: "/assets/best-seller-4.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    inStock: 13,
    reviewCount: 117,
    rating: 3.9,
    imageSrc: "/assets/best-seller-5.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    inStock: 10,
    rating: 3.9,
    reviewCount: 117,
    imageSrc: "/assets/best-seller-6.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

// const product = {
//   id: 1,
//   name: "White EliteBook Tablet  ",
//   price: "900$",
//   rating: 3.9,
//   reviewCount: 117,
//   inStock: 10,
//   href: "#",
//   imageSrc: "/assets/best-seller-1.png",
//   imageAlt: "Two each of gray, white, and black shirts arranged on table.",
//   category: "HEADPHONES",
// };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage() {
  const productId = useParams();
  const product = products.find((item) => item.id === +productId.id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [categories] = useState({
    Description: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Reviews: [
      {
        id: 1,
        name: "Wade Warren",
        photo: "",
        date: "Jan 7",
        rating: 4,
        comment: "",
      },
    ],
  });

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
                  <img alt="" src="../assets/best-seller-3.png" />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img alt="" src="../assets/best-seller-3.png" />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img alt="" src="../assets/best-seller-3.png" />
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
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src="../assets/best-seller-3.png" />
                </SwiperSlide>
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src="../assets/best-seller-3.png" />
                </SwiperSlide>
                <SwiperSlide className="bg-gray-200 rounded-lg cursor-pointer">
                  <img alt="" src="../assets/best-seller-3.png" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          {/* Right Side */}
          <div className="space-y-8 sm:col-span-1">
            {/* NAME */}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              {product.name}
            </h2>

            <section
              aria-labelledby="information-heading"
              className="space-y-8"
            >
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              {/* Price */}
              <p className="text-gray-900 lg:text-3xl font-bold">
                {product.price}
              </p>

              {/* Reviews */}
              <div className="">
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
                  {product.reviewCount} reviews
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </div>
                  {/* Stock */}
                  {product.inStock ? (
                    <div className="text-base ">
                      In Stock: {product.inStock}
                    </div>
                  ) : (
                    <p className="text-base  ">Out Of Stock</p>
                  )}
                </div>
              </section>
              {/* Buttons */}
              <div className="grid self-start w-full sm:grid-cols-2 grid-cols-1 gap-5">
                <Button
                  text="Add to Cart"
                  className="text-white bg-black hover:bg-black/90"
                  to="#"
                />
                <Button
                  text="Buy Now"
                  className="text-black bg-white border border-black hover:bg-gray-100  hover:text-black"
                  to="#"
                />
              </div>
            </div>
          </div>
        </div>

        {/* description and reviews */}
        <div className="w-full px-2 py-36 sm:px-0 ">
          <Tab.Group>
            {/* Switcher BTN */}
            <Tab.List className="flex max-w-sm mx-auto space-x-1 border border-black rounded-lg overflow-hidden">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-base ",
                      selected ? "bg-black shadow text-white" : "text-black "
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            {/* Description */}
            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-16 space-y-5 text-left ">
                  <h2 className="text-2xl ">Description</h2>
                  <hr className="border-black" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages,
                  </p>
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
                      <img
                        className="w-10 h-10 bg-gray-500 rounded-full mb-4 md:mb-0"
                        alt="reviewer pic"
                      ></img>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">Wade Warren</h3>
                        <p className="text-base ">added at : 10 march 2022</p>
                      </div>
                    </div>
                    {/* rating */}
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
                  <hr className="mt-3 mb-6 border-black" />
                  <p className="text-base ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>

                {/* Add Comment */}
                <div className="mt-16 px-7 pt-7 space-y-4">
                  {/* Header*/}
                  <h1 className="text-3xl font-bold sm:text-5xl">
                    Add a review
                  </h1>
                  {/* Rating */}
                  <div className="flex flex-row items-center space-x-3 -mt-4">
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
                  {/* Form */}
                  <form>
                    <div className="flex flex-col">
                      <label htmlFor="w3review" className=" mb-2 mt-4">
                        Your Review:
                      </label>
                      <textarea
                        id=""
                        name=""
                        rows="4"
                        cols="50"
                        placeholder="Type your review..."
                        className="max-w-md p-3 border border-black rounded-lg"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      form=""
                      value="Submit"
                      className="px-5 py-2 text-white bg-black rounded-lg mt-7"
                    >
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
}
