import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartRow from "../components/Cart/CartRow";
import BillingDetails from "../components/checkout/BillingDetails";
import { ReactComponent as Spinner } from "./../assets/spinner.svg";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = products?.reduce((a, b) => a + b.price * b.quantity, 0);
  const [loading, setloading] = useState(false);
  const [newAddress, setNewAddress] = useState(null);
  const [couponDisc, setCouponDisc] = useState(null);
  const user = useSelector((state) => state.user);
  const couponHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    try {
      const coupon = await axios.get(
        `http://localhost:5000/api/v1/coupons/check/${formData.coupon}`,
        {
          withCredentials: true,
        }
      );
      setCouponDisc(coupon.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const checkoutHandler = async () => {
    let address = user?.address;
    setloading(true);
    if (newAddress) address = newAddress;
    const orederProducts = products.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));
    const order = {
      orderCoupon: couponDisc?._id,
      products: orederProducts,
      shipping: {
        address,
      },
    };
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/checkout",
        order,
        {
          withCredentials: true,
        }
      );
      const { session } = result.data;
      setloading(false);
      window.location.replace(session.url);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  return (
    <div className="min-h-screen py-28 max-w-2xl px-4 mx-auto sm:px-6 md:max-w-7xl lg:px-8">
      <table
        className="w-full text-sm lg:text-base table-auto "
        cellSpacing="0"
      >
        <thead>
          <tr className="h-12 capitalize border-b ">
            <th className="hidden md:table-cell"></th>
            <th className="text-left">Product</th>
            <th className="lg:text-right text-left pl-5 lg:pl-0">
              <span className="lg:hidden" title="Quantity">
                Qtd
              </span>
              <span className="hidden lg:inline">Quantity</span>
            </th>
            <th className="hidden text-right md:table-cell">Unit price</th>
            <th className="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <CartRow product={product} key={product._id} index={index} />
            ))}
        </tbody>
      </table>
      <form onSubmit={couponHandler}>
        <div className="w-full md:w-2/4  float-right mt-8 flex">
          <input
            className=" rounded-lg block basis-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
            placeholder="Your coupon"
            name="coupon"
          />
          <button
            type="submit"
            className="group basis-1/3 ml-2  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Apply
          </button>
        </div>
      </form>
      {/* cart total && cart details */}
      <div className="w-full flex flex-col md:flex-row pt-28 pb-10  gap-24 md:gap-0">
        <BillingDetails
          setAddress={setNewAddress}
          newAddress={newAddress}
          user={user}
        />
        <div className="md:w-1/2 ">
          <h3 className="text-4xl font-medium">Cart Total</h3>
          <div className="mt-8">
            <div className="flex justify-between border-b py-2">
              <h5>Subtotal</h5>
              <p>{`$${totalPrice}`}</p>
            </div>
            <div className="flex justify-between border-b  py-2">
              <h5>Shipping fee</h5>
              <p>Free</p>
            </div>
            <div className="flex justify-between   py-2">
              <h5>Discount</h5>
              <p>{couponDisc?.discount || 0}%</p>
            </div>
            <div className="flex justify-between border-t border-black  py-2">
              <h5>Total</h5>
              <p>{`$${(
                totalPrice *
                (1 - (couponDisc?.discount || 0) / 100)
              ).toFixed(2)}`}</p>
            </div>
            <button
              type="submit"
              onClick={checkoutHandler}
              className="group basis-1/3 mt-2  flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {loading && <Spinner className=" animate-spin mr-4 " />}
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
