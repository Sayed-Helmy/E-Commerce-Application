import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("please enter an email"),
    password: yup.string().min(7).required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Signup = () => {
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      const user = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(userActions.setUser(user.data));
      toast.success("user created successfully", { autoClose: 1500 });
      navigator("/");
    } catch (err) {
      toast.error(err.response.data.message, { autoClose: 1500 });
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>
                <input
                  {...register("name")}
                  className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  placeholder="your name"
                  autoFocus
                />
                <p className="py-2 text-sm text-red-600">
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  placeholder="Email address"
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Password confirmation
                </label>
                <input
                  {...register("passwordConfirmation")}
                  type="password"
                  className=" relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  placeholder="confirm your password"
                />

                <p className="py-2 text-sm text-red-600">
                  {errors.passwordConfirmation?.message}
                </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Sign up
              </button>
              <p className="py-2 text-sm text-red-600">{error && error}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
