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
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 px-1 text-base",
                selected ? "rounded-lg bg-black text-white" : ""
              )
            }
          >
            Info
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full whitespace-nowrap py-2.5 px-1	text-base",
                selected ? "rounded-lg bg-black text-white" : ""
              )
            }
          >
            Set Password
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Info */}
            <form className="mt-7 space-y-5">
              {/* name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="first-name"
                  defaultValue={user?.name}
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
                />
              </div>
              {/* email */}
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  value={user ? user.email : ""}
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
                />
              </div>
              {/* Address */}
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Default Address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  value={user ? user.address : ""}
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
                />
              </div>
              {/* Mobile */}
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  value={user ? user.mobile : ""}
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
                />
              </div>
              {/* change */}
              <button
                type="submit"
                className="rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Change
              </button>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            {/* Change Pass */}
            <div>
              <form className="mt-7 space-y-5">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="city"
                  autoComplete="address-level2"
                  defaultValue=""
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
                />
                {/* change */}
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
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
