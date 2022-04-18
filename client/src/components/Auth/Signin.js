import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import { useState } from "react";
import { cartActions } from "../../store/cartSlice";

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(7).required("Password is required"),
  })
  .required();

const Signin = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const user = await axios.post(
        "http://localhost:5000/api/v1/auth/signin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(userActions.setUser(user.data));
      dispatch(cartActions.setCart(user.data.cart));
      navigator(location.state?.from.pathname || "/");
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  placeholder="Email address"
                  autoFocus
                />
                <p className="py-2 text-sm text-red-600">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  placeholder="Password"
                />
                <p className="py-2 text-sm text-red-600">
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-black/50 hover:text-black/60"
                >
                  Forgot your password?
                </a>
              </div>
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
                Sign in
              </button>
              <p className="py-2 text-sm text-red-600">{error && error}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
