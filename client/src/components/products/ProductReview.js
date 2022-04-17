import { StarIcon } from "@heroicons/react/solid";
import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductReview = ({ review }) => {
  return (
    <div className="px-8 pb-16 mt-16 bg-[#ECECEC] rounded-2xl sm:px-7 pt-7 ">
      {/* Header */}
      <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row">
        {/* account */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
          <img
            className="w-10 h-10 bg-gray-500 rounded-full mb-4 md:mb-0"
            alt="reviewer pic"
            src={review?.avatar}
          ></img>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">{review?.name}</h3>
            <p className="text-base ">
              added at : {new Date(review.createdAt).toLocaleDateString()}
            </p>
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
                    review.rating > rating ? "text-gray-900" : "text-gray-400",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{review.rating} out of 5 stars</p>
          </div>
        </div>
      </div>
      <hr className="mt-3 mb-6 border-black" />
      <p className="text-base ">{review.message}</p>
    </div>
  );
};

export default ProductReview;
