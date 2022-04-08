import React from "react";
import { useForm } from "react-hook-form";

const passwordRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Signup
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="shadow overflow-hidden sm:rounded-md ">
          <div className="px-4 py-2  bg-white sm:p-5">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  autoComplete="given-name"
                  className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
                  placeholder="Name"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: emailRegex,
                      message: " Email format is not correct ",
                    },
                  })}
                />
              </div>
              <p>{errors.email?.message}</p>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  password
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
                  {...register("password", {
                    required: true,

                    minLength: {
                      value: 7,
                      message: "min number is 7",
                    },
                    pattern: {
                      value: passwordRegex,
                      message: "Password dosen't mach the pattern",
                    },
                  })}
                />
              </div>
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
