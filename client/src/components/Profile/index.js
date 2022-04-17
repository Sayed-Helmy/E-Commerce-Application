import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [imageState, setImageState] = useState(null);
  console.log(user);
  const changehandler = (e) => {
    setImageState(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await axios.patch(
      "http://localhost:5000/api/v1/auth/updateUser",
      formData,
      {
        withCredentials: true,
      }
    );
    dispatch(userActions.setUser(result.data));
  };
  return (
    <div className="min-h-screen py-28 max-w-2xl px-4 mx-auto sm:px-6 md:max-w-7xl lg:px-8">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submitHandler}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6  py-5 bg-white  sm:py-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <img
                            src={imageState || user?.avatar}
                            alt=""
                            className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 object-cover"
                          />
                          {/* Change */}
                          <input
                            type="file"
                            name="avatar"
                            onChange={changehandler}
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="first-name"
                        defaultValue={user?.name}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        disabled
                        type="text"
                        name="email-address"
                        id="email-address"
                        value={user ? user.email : ""}
                        autoComplete="email"
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black/50 focus:border-black/50 sm:text-sm"
                      >
                        <option>Egypt</option>
                        <option>Saudi Arabia</option>
                        <option>United Arab Emirates</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street-address"
                        autoComplete="street-address"
                        defaultValue={user?.address.street}
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        defaultValue={user?.address.city}
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="region"
                        autoComplete="address-level1"
                        defaultValue={user?.address.state}
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="phone-num"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone-num"
                        autoComplete="phone"
                        defaultValue={user?.address.phone}
                        className="mt-1 focus:ring-black/50 focus:border-black/50 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
