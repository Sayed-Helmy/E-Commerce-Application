import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserInfo = ({ user }) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className=" flex">
          <Tab className={({ selected }) => classNames("w-full py-2.5 px-1 text-base", selected ? "rounded-lg bg-black text-white" : "")}>Info</Tab>
          <Tab className={({ selected }) => classNames("w-full whitespace-nowrap py-2.5 px-1	text-base", selected ? "rounded-lg bg-black text-white" : "")}>Set Password</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Info */}
            <form className="mt-7 space-y-5">
              {/* name */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Name
                </label>
                <p>{user.name}</p>
              </div>
              {/* _id */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  ID
                </label>
                <p>{user._id}</p>
              </div>
              {/* email */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  E-Mail
                </label>
                <p>{user.email}</p>
              </div>
              {/* Address */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Address
                </label>
                <p></p>
              </div>
              {/* Mobile */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
                  Mobile
                </label>
                <p></p>
              </div>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            {/* Change Pass */}
            <div>
              <form className="mt-7 flex flex-col items-center justify-center space-y-5 xl:items-start">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input type="password" name="newPassword" id="city" autoComplete="address-level2" defaultValue="" className="mt-1 block w-full max-w-sm rounded-md border-gray-300 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
                {/* change */}
                <button type="submit" className="max-w-sm rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Set
                </button>
              </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default UserInfo;
