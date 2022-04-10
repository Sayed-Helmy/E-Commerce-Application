import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  LocationMarkerIcon,
  MailOpenIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("mail is required"),
    message: yup.string().required("message is required"),
  })
  .required();

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl">
          <div className=" basis-2/4 text-left">
            <h2 className="mt-6 text-left text-5xl font-extrabold text-gray-900">
              Cantact us
            </h2>
            <p className="w-96 mt-2">Lorem ipsum dolor sit amet</p>
            <div className="mt-12">
              <div className="flex">
                <span>
                  <MailOpenIcon
                    className="h-5 w-5  group-hover:text-gray-100"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-4">mail@mail.com</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex">
                <span>
                  <PhoneIcon
                    className="h-5 w-5  group-hover:text-gray-100"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-4">+2 (109) 000-0000</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex">
                <span>
                  <LocationMarkerIcon
                    className="h-5 w-5  group-hover:text-gray-100"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-4">Egypt, cairo 53432</p>
              </div>
            </div>
          </div>
          <form
            className="mt-8 basis-2/4  space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="your name"
                  autoFocus
                />
                <p className="py-2 text-red-600 text-sm">
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  className=" rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <p className="py-2 text-red-600 text-sm">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <textarea
                  {...register("message")}
                  className=" rounded-lg  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="type your messgae here"
                  rows={6}
                />
                <p className="py-2 text-red-600 text-sm">
                  {errors.message?.message}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
