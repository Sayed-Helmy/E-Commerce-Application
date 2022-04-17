import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartRow from "../components/Cart/CartRow";
import { ReactComponent as Spinner } from "./../assets/spinner.svg";

import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = products?.reduce((a, b) => a + b.price * b.quantity, 0);
  const [loading, setloading] = useState(false);

  return (
    <div className="min-h-screen py-28 max-w-2xl px-4 mx-auto sm:px-6 md:max-w-7xl lg:px-8">
      <table className="w-full text-sm lg:text-base table-auto " cellSpacing="0">
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
        <tbody>{products && products.map((product, index) => <CartRow product={product} key={product._id} index={index} />)}</tbody>
      </table>
      <div className="w-full md:w-2/4  float-right mt-8 flex">
        <input className=" rounded-lg block basis-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="your copoun" />
        <button type="submit" className="group basis-1/3 ml-2  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Apply
        </button>
      </div>
      {/* cart total && cart details */}
      <div className="w-full flex flex-col md:flex-row pt-28 pb-10  gap-24 md:gap-0">
        <div className="md:w-1/2 ">
          <h3 className="text-4xl font-medium">Billing details</h3>
          <div>
            <Tab.Group>
              <Tab.List className="flex w-5/6   mt-5 mb-2">
                <Tab className={({ selected }) => classNames("w-full py-2.5 text-base ", selected ? "bg-black text-white rounded-lg" : "")}>Current Address</Tab>
                <Tab className={({ selected }) => classNames("w-full py-2.5 text-base ", selected ? "bg-black text-white rounded-lg" : "")}>Add New</Tab>
              </Tab.List>

              <Tab.Panels>
                <Tab.Panel>
                  <div className="flex flex-col p-8 bg-[#ECECEC] rounded-lg w-5/6">
                    <p className="py-1 px-2 rounded-lg">Address :</p>
                    <br />
                    <p className="py-1 px-2 rounded-lg">Phone :</p>
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  <div className="flex flex-col p-8 bg-[#ECECEC] rounded-lg w-5/6">
                    <form className="space-y-5">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black/50 focus:border-black/50 sm:text-sm">
                          <option>Egypt</option>
                          <option>Saudi Arabia</option>
                          <option>United Arab Emirates</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input type="text" name="region" id="region" autoComplete="address-level1" className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <button type="submit" className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Save
                      </button>
                    </form>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/*
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
          */}
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
              onClick={() => {
                setloading(true);
              }}
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
