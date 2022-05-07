import { useSelector } from "react-redux";
import AccountStatusDrop from "./AccountStatusDrop";
import UserOrders from "./UserOrders";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  const userId = useParams().id;
  const users = useSelector((state) => state.admin.users);
  const user = users.find((user) => user._id === userId);
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <div className="space-y-5">
        {/* Photo */}
        <div className=" flex items-center justify-center">
          <div className="relative mb-4 flex items-center">
            <img
              src={user?.avatar}
              type="file"
              id="cat-Image"
              alt=""
              name="mainImage"
              className="h-14 w-14 rounded-full border-2 border-gray-300 "
            />
          </div>
        </div>
        {/* ID */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <label
            htmlFor="cat-name"
            className="w-24 whitespace-nowrap rounded-l-lg bg-black/60 py-1 px-3 text-white"
          >
            Name
          </label>
          <p>{user?.name}</p>
        </div>
        {/* Status */}
        <div className="mx-auto max-w-sm">
          <AccountStatusDrop user={user} />
        </div>
        {/* Grid */}
        <div className=" mx-auto w-full">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {/* Left Side */}
            <div className="col-span-1 rounded-2xl border-2 py-10 px-3 md:px-4 xl:px-6">
              {user && <UserOrders user={user} />}
            </div>
            {/* Right Side */}
            <div className="col-span-1 rounded-2xl border-2 py-10 px-3 md:px-4 xl:px-6">
              {user && <UserInfo user={user} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
