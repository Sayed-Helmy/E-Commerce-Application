import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CartRow from "../components/Cart/CartRow";
import PayMethod from "../components/Cart/PayMethod";
import BillingDetails from "../components/checkout/BillingDetails";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = products?.reduce((a, b) => a + b.price * b.quantity, 0);
  const [newAddress, setNewAddress] = useState(null);
  const [couponDisc, setCouponDisc] = useState(null);
  const user = useSelector((state) => state.user);
  let [plan, setPlan] = useState("startup");

  const couponHandler = async (e) => {
    const tostyId = toast.loading("Please wait...");
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    try {
      const coupon = await axios.get(`http://localhost:5000/api/v1/coupons/check/${formData.coupon}`, {
        withCredentials: true,
      });
      setCouponDisc(coupon.data);
      toast.update(tostyId, {
        render: `Nice You have Got ${coupon.data.discount}% Off`,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      toast.update(tostyId, {
        render: "Wrong Coupon Scammer :D",
        type: "warning",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };
  const checkoutHandler = async () => {
    let address = user?.address;
    const tostyId = toast.loading("Please wait you will redirected to Payment");
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
      const result = await axios.post("http://localhost:5000/api/v1/checkout", order, {
        withCredentials: true,
      });
      const { session } = result.data;
      toast.update(tostyId, {
        render: `Redirecting...`,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      window.location.replace(session.url);
    } catch (error) {
      console.log(error.response.data);
      toast.update(tostyId, {
        render: error.response.data.msg,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="mx-auto min-h-screen max-w-2xl py-28 px-4 sm:px-6 md:max-w-7xl lg:px-8">
      <table className="w-full table-auto text-sm lg:text-base " cellSpacing="0">
        <thead>
          <tr className="h-12 border-b capitalize ">
            <th className="hidden md:table-cell"></th>
            <th className="text-left">Product</th>
            <th className="pl-5 text-left lg:pl-0 lg:text-right">
              <span className="lg:hidden" title="Quantity">
                Qtd
              </span>
              <span className="hidden lg:inline">Quantity</span>
            </th>
            <th className="hidden text-right md:table-cell">Unit price</th>
            <th className="text-right">Total price</th>
          </tr>
        </thead>
        <tbody>{products && products.map((product, index) => <CartRow product={product} key={product._id} index={index} />)}</tbody>
      </table>
      <form onSubmit={couponHandler}>
        <div className="float-right mt-8  flex w-full md:w-2/4">
          <input className=" block basis-2/3 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm" placeholder="Your coupon" name="coupon" />
          <button type="submit" className="group ml-2 flex  basis-1/3 justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Apply
          </button>
        </div>
      </form>
      {/* cart total && cart details */}
      <div className="flex w-full flex-col gap-24 pt-28 pb-10  md:flex-row md:gap-0">
        <BillingDetails setAddress={setNewAddress} newAddress={newAddress} user={user} />
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
              <p>{`$${(totalPrice * (1 - (couponDisc?.discount || 0) / 100)).toFixed(2)}`}</p>
            </div>
            <div>
              <PayMethod />
            </div>
            <button type="submit" onClick={checkoutHandler} className="group mt-2 flex  basis-1/3 justify-center rounded-md border border-transparent bg-black py-3 px-6 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
