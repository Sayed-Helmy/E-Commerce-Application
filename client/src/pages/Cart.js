import React from "react";
import { useSelector } from "react-redux";
import CartRow from "../components/Cart/CartRow";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = products?.reduce((a, b) => a + b.price * b.quantity, 0);
  console.log(totalPrice);
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
              <CartRow product={product} key={product.id} index={index} />
            ))}
        </tbody>
      </table>
      <div className="w-full md:w-2/4  float-right mt-8 flex">
        <input
          className=" rounded-lg block basis-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          placeholder="your copoun"
        />
        <button
          type="submit"
          className="group basis-1/3 ml-2  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Apply
        </button>
      </div>
      {/* cart total && cart details */}
      <div className="w-full flex flex-col md:flex-row py-28  gap-24 md:gap-0">
        <div className="md:w-1/2 ">
          <h3 className="text-4xl font-medium">Billing details</h3>
          <div className="w-full md:w-2/4   my-6 flex items-center">
            <p className="basis-2/3"> Current Address</p>
            <button
              type="submit"
              className="group basis-1/3 ml-2  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Add New
            </button>
          </div>
          <div className="flex- flex-col p-8 bg-[#ECECEC] rounded-lg md:w-2/3">
            <p>Name:</p>
            <p>Address:</p>
            <p>Phone:</p>
          </div>
        </div>
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
              <p>10%</p>
            </div>
            <div className="flex justify-between border-t border-black  py-2">
              <h5>Total</h5>
              <p>{`$${(totalPrice * 0.9).toFixed(2)}`}</p>
            </div>
            <button
              type="submit"
              className="group basis-1/3 mt-2  flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
