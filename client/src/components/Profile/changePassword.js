import React from "react";

const ChangePassword = () => {
  return (
    <div className="mt-4 flex max-w-sm flex-col rounded-lg bg-[#ECECEC] p-4">
      <form className="space-y-5">
        <div className="col-span-6">
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input type="password" name="street" id="street-address" autoComplete="street-address" defaultValue="" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input type="password" name="city" id="city" autoComplete="address-level2" defaultValue="" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
        </div>

        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Change
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;
