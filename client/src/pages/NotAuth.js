import React from "react";

const NotAuth = () => {
  return (
    <div className="container mx-auto flex h-screen max-h-screen flex-col items-center py-28">
      <img src="/assets/notauth.png " alt="not auth" className=" w-1/4" />
      <div className="mt-6 max-w-xl text-center">
        <h1 className=" my-4 text-6xl font-bold text-black">
          Oops, Access Denied.
        </h1>
        <p className=" text-xs text-gray-500">
          The page you are looking for isn't allowed for you .
        </p>
      </div>
    </div>
  );
};

export default NotAuth;
