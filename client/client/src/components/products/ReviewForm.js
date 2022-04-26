import { StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/productsSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReviewForm = ({ product }) => {
  const [error, isError] = useState();
  const [stars, setStars] = useState();
  const reviewRef = useRef();
  const dispatch = useDispatch();

  const reviewHandler = async (e) => {
    e.preventDefault();
    const message = reviewRef.current.value;
    const review = { rating: stars, message };
    try {
      const result = await axios.patch(
        ` http://localhost:5000/api/v1/products/reviews/${product._id}`,
        review,
        {
          withCredentials: true,
        }
      );
      console.log(result);
      dispatch(productsActions.addreview(result.data));
    } catch (error) {
      isError(error.response.data.msg);
    }
  };
  return (
    <form className="space-y-7" onSubmit={reviewHandler}>
      <div className="-mt-2 flex flex-row items-center space-x-3">
        <div>Your Rating</div>
        <div>
          <h4 className="sr-only">Reviews</h4>
          <div className="flex items-center">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <StarIcon
                  key={rating}
                  onClick={() => setStars(rating)}
                  className={classNames(
                    stars >= rating ? "text-gray-900" : "text-gray-400",
                    "h-5 w-5 flex-shrink-0 cursor-pointer"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="w3review" className="">
          Your Review:
        </label>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your review..."
          className="max-w-md rounded-lg border border-black p-3"
          ref={reviewRef}
        ></textarea>
      </div>
      {error && <p>{error}</p>}
      <button
        type="submit"
        value="Submit"
        className="rounded-lg bg-black px-5 py-2 text-white "
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
