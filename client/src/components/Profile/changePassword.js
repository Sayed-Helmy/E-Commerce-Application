import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const formdata = Object.fromEntries([...new FormData(e.currentTarget)]);
      console.log(formdata);
      await axios.post(
        "http://localhost:5000/api/v1/auth/changePassword",
        formdata,
        {
          withCredentials: true,
        }
      );
      toast.success("Password Changed Successfuly!", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.response.data.msg, { autoClose: 1000 });
    }
  };
  return (
    <div className="mt-4 flex max-w-sm flex-col rounded-lg bg-[#ECECEC] p-4">
      <form className="space-y-5" onSubmit={submitHandler}>
        <div className="col-span-6">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            id="street-address"
            autoComplete="street-address"
            defaultValue=""
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
        </div>

        <button
          type="submit"
          className="rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Change
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;
