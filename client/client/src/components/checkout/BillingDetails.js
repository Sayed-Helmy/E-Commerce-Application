import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BillingDetails = ({ setAddress, newAddress ,user}) => {
  const address = newAddress || user?.address;
  const userAddress = `${address?.street} / ${address?.city} / ${address?.state}`;
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    setAddress(formData);
  };
  return (
    <div className="md:w-1/2 ">
      <h3 className="text-4xl font-medium">Billing details</h3>
      <div>
        <Tab.Group>
          <Tab.List className="flex w-5/6   mt-5 mb-2">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-base ",
                  selected ? "bg-black text-white rounded-lg" : ""
                )
              }
            >
              Current Address
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-base ",
                  selected ? "bg-black text-white rounded-lg" : ""
                )
              }
            >
              Add New
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-col p-8 bg-[#ECECEC] mt-4 rounded-lg w-5/6">
                <p className="py-1 px-2 rounded-lg">Address: {userAddress}</p>
                <p className="py-1 px-2 rounded-lg">
                  Country: {address?.country}
                </p>
                <p className="py-1 px-2 rounded-lg">Phone: {address?.phone}</p>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="flex flex-col p-8 bg-[#ECECEC] mt-4 rounded-lg w-5/6">
                <form className="space-y-5" onSubmit={submitHandler}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      defaultValue={address?.country}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black/50 focus:border-black/50 sm:text-sm"
                    >
                      <option>Egypt</option>
                      <option>Saudi Arabia</option>
                      <option>United Arab Emirates</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street"
                      id="street-address"
                      autoComplete="street-address"
                      defaultValue={address?.street}
                      className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      defaultValue={address?.city}
                      className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="region"
                      autoComplete="address-level1"
                      defaultValue={address?.state}
                      className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="postal-code"
                      autoComplete="phone"
                      defaultValue={address?.phone}
                      className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Save
                  </button>
                </form>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default BillingDetails;
