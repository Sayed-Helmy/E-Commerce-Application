import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" mt-6 text-center text-3xl font-extrabold capitalize text-gray-900">
              reset your password
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="sr-only">
                Old Password
              </label>
              <input
                type="password"
                className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                placeholder="enter your old Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                type="password"
                className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                placeholder="enter your new Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5  group-hover:text-gray-100"
                    aria-hidden="true"
                  />
                </span>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
