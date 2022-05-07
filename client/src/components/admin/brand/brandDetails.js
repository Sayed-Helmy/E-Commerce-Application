import React from "react";
import axios from "axios";

const BrandDetails = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const brand = await axios.post(
        "http://localhost:5000/api/v1/brands",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(brand);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl py-10 sm:mt-12 ">
      <h3 className="mb-7 text-3xl font-bold">Brand : name</h3>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 space-y-5 rounded-2xl border-2 py-10 px-3 sm:px-10"
      >
        {/* name */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <label
            htmlFor="cat-name"
            className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white"
          >
            Name
          </label>
          <input
            type="text"
            placeholder={"brand name"}
            id="cat-name"
            name="name"
            className="focus:ring-none w-56 border-x-0 border-t-0 border-b-4 border-b-gray-400	outline-none  focus:border-b-green-400 focus:ring-0"
          />
        </div>
        {/* description */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <label
            htmlFor="cat-name"
            className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white"
          >
            Description
          </label>
          <textarea
            id=""
            name="description"
            rows="2"
            cols="20"
            defaultValue={"Description"}
            className=" w-60  rounded-md focus:border-black/50 focus:ring-black/50"
          ></textarea>
        </div>

        <div className="flex justify-end pt-5">
          <button
            type="submit"
            className=" w-32 cursor-pointer rounded-md border border-transparent bg-black px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandDetails;
