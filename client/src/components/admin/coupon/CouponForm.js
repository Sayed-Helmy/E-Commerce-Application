import axios from "axios";
import React from "react";

const CouponForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    try {
      const coupon = await axios.post(
        "http://localhost:5000/api/v1/coupons",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(coupon);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="coupon-Key">Key</label>
        <input type="text" name="key" id="coupon-Key" />
      </div>
      <div>
        <label htmlFor="coupon-discount">Discount</label>
        <input type="text" name="discount" id="coupon-discount" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CouponForm;
