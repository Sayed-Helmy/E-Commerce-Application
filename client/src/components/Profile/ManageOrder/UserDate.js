import React from "react";

const UserDate = ({ user }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded bg-gray-50 px-4 py-6 md:items-start md:p-6 xl:w-96 xl:p-8 ">
      <h3 className="text-xl font-semibold leading-5 text-gray-800">
        Customer
      </h3>
      <div className="flex  h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0 ">
        <div className="flex flex-shrink-0 flex-col items-start justify-start">
          <div className="flex w-full  items-center  justify-center space-x-4 border-b border-gray-200 py-8 md:justify-start">
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-12 rounded-full"
            />
            <div className=" flex flex-col items-start justify-start space-y-2">
              <p className="text-left text-base font-semibold leading-4 text-gray-800">
                {user.name}
              </p>
            </div>
          </div>

          <div className="flex w-full  items-center justify-center space-x-4 border-b border-gray-200 py-4 md:justify-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 7L12 13L21 7"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="cursor-pointer text-sm leading-5 text-gray-800">
              {user.email}
            </p>
          </div>
        </div>
        <div className="mt-6 flex w-full  flex-col items-stretch justify-between md:mt-0 xl:h-full">
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-start md:space-x-6 md:space-y-0 lg:space-x-8 xl:flex-col  xl:space-x-0 xl:space-y-12 ">
            <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start xl:mt-8">
              <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                Shipping Address
              </p>
              <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                {user?.address?.street} , {user?.address?.city} ,{" "}
                {user?.address?.state} , {user?.address?.country}
              </p>
            </div>
            <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start ">
              {/* billing address still need to be handled */}
              <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                Billing Address
              </p>
              <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                180 North King Street, Northhampton MA 1060
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDate;
