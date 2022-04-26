import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userActions } from "../../store/userSlice";
import ViewOrders from "./table/ViewOrders";
import ViewCart from "./ViewCart";

export default function ViewUser() {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [imageState, setImageState] = useState(null);
  console.log(user);
  const changehandler = (e) => {
    setImageState(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const result = await axios.patch(
        "http://localhost:5000/api/v1/auth/updateUser",
        formData,
        {
          withCredentials: true,
        }
      );
      dispatch(userActions.setUser(result.data));
      setIsLoading(false);
      toast.success("Data Has Been Saved Successfuly!", { autoClose: 1000 });
    } catch (error) {
      console.log(error.response.data.msg);
      setIsLoading(false);
      toast.error("Somthing Went Wrong!", { autoClose: 1000 });
    }
  };
  return (
    <div className="mx-auto min-h-screen py-28">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-10 md:gap-6">
          <div className="md:col-span-4">
            <div className="px-4 sm:px-0 mb-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <table
                className="w-full table-auto text-sm lg:text-base mb-5"
                cellSpacing="0"
            >
                <thead>
                <tr className="h-12 border-b capitalize ">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="pl-5 text-left lg:pl-0 lg:text-right">
                    <span className="lg:hidden" title="Quantity">
                        Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">Unit price</th>
                    <th className="text-right">Total price</th>
                </tr>
                </thead>
                <tbody>
                {user?.cart &&
                    user?.cart.map((product, index) => (
                    <ViewCart product={product} key={product._id} index={index} />
                ))}
                </tbody>
            </table>

            <h3 className="text-lg font-medium leading-6 text-gray-900 mt-10 mb-4">
              {user?.name}'s Orders
            </h3>

            <table
                className="w-full table-auto text-sm lg:text-base mb-5"
                cellSpacing="0"
            >
                <thead>
                <tr className="h-12 border-b capitalize ">
                    {/* <th className="hidden md:table-cell"></th> */}
                    <th className="text-left">Order</th>
                    <th className="pl-5 text-left lg:pl-0 lg:text-right">
                      <span className="lg:hidden" title="Quantity">
                          Qtd
                      </span>
                      <span className="hidden lg:inline">Payment</span>
                    </th>
                    <th className="hidden md:table-cell">Status</th>
                    <th className="hidden md:table-cell">Created at</th>
                    <th className="text-right">Total price</th>
                </tr>
                </thead>
                <tbody>

                <ViewOrders product={user?.orders[0]}/>

                </tbody>
            </table>

            
          </div>
          <div className="mt-5 md:col-span-6 md:mt-0">
            <form onSubmit={submitHandler}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 bg-white py-5 sm:py-6 text-center">
                        <div className="mt-2 flex items-center justify-center">
                          <img
                            src={imageState || user?.avatar}
                            alt=""
                            className="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100 object-cover"
                          />
                          {/* Change */}
                        </div>
                    </div>
                      
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <p className="text-large mt-2">
                        Mado
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <p className="text-large mt-2">
                        Email
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>
                      <select
                        id="Role"
                        name="Role"
                        className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-3 py-2 shadow-sm focus:border-black/50 focus:outline-none focus:ring-black/50 sm:text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Status
                      </label>
                      <select
                        id="Status"
                        name="Status"
                        className="mt-1 block w-full rounded-md border border-gray-500 bg-white px-3 py-2 shadow-sm focus:border-black/50 focus:outline-none focus:ring-black/50 sm:text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="created-at"
                        className="block text-sm font-medium text-gray-700"
                      >
                          Created At
                      </label>
                      <p className="text-large mt-2">
                        {user ? `${new Date(user.createdAt).getDate()} / ${new Date(user.createdAt).getMonth()+1} / ${new Date(user.createdAt).getFullYear()}` : ""}
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="updated-at"
                        className="block text-sm font-medium text-gray-700"
                      >
                          Updated At
                      </label>
                      <p className="text-large mt-2">
                        {user ? `${new Date(user.updatedAt).getDate()} / ${new Date(user.createdAt).getMonth()+1} / ${new Date(user.createdAt).getFullYear()}` : ""}
                      </p>
                    </div>

                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400"
                  >
                    Save
                  </button>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
