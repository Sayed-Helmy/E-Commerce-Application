import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-28 h-screen max-h-screen">
      <img src="./assets/404.png" alt="not found" className=" w-1/3" />
      <div className="max-w-xl text-center">
        <h1 className=" text-6xl font-bold text-black my-4">
          Oops, This Page Could Not Be Found.
        </h1>
        <p className=" text-xs text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
