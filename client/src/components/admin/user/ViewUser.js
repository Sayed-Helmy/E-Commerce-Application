import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userActions } from "../../../store/userSlice";
import AccountStatusDrop from "./AccountStatusDrop";
import UserOrders from "./UserOrders";
import UserInfo from "./UserInfo";

export default function ViewUser({ user }) {
  console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [imageState, setImageState] = useState(null);
  // console.log(user);
  const changehandler = (e) => {
    setImageState(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const result = await axios.patch("http://localhost:5000/api/v1/auth/updateUser", formData, {
        withCredentials: true,
      });
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
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <div className="space-y-5">
        {/* Photo */}
        <div className=" flex items-center justify-center">
          <div className="relative mb-4 flex items-center">
            <img src={user.avatar} type="file" id="cat-Image" alt="" name="mainImage" className="h-14 w-14 rounded-full border-2 border-gray-300 " />
          </div>
        </div>
        {/* ID */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <label htmlFor="cat-name" className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white">
            Name
          </label>
          <p>{user?.name}</p>
        </div>
        {/* Status */}
        <div className="mx-auto max-w-sm">
          <AccountStatusDrop />
        </div>
        {/* Grid */}
        <div className=" mx-auto w-full">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {/* Left Side */}
            <div className="col-span-1 rounded-2xl border-2 py-10 px-3 md:px-4 xl:px-6">{user && <UserOrders user={user} />}</div>
            {/* Right Side */}
            <div className="col-span-1 rounded-2xl border-2 py-10 px-3 md:px-4 xl:px-6">{user && <UserInfo user={user} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
