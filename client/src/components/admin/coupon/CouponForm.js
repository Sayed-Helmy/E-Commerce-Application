import axios from "axios";
import React from "react";

const CouponForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    try {
      const coupon = await axios.post("http://localhost:5000/api/v1/coupons", formData, {
        withCredentials: true,
      });
      console.log(coupon);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="mx-auto w-fit py-10 sm:mt-12 ">
      <h3 className="mb-7 text-3xl font-bold">Create Coupon</h3>
      <form onSubmit={submitHandler} className="space-y-10 rounded-2xl border-2 py-10 px-3 sm:px-10">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <label htmlFor="coupon-Key" className="w-20">
            Key
          </label>
          <input type="text" name="key" id="coupon-Key" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <label htmlFor="coupon-discount" className="w-20">
            Discount
          </label>
          <input type="text" name="discount" id="coupon-discount" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className=" w-32 cursor-pointer rounded-md border border-transparent bg-black px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
