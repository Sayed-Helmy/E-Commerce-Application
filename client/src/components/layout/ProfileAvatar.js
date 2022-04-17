import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SliderCart from "../Cart/SliderCart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileAvatar = ({ logoutHandler, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user?.avatar} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right  z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  <Menu.Button className="w-full text-left">
                    <span
                      onClick={() => setOpen(!open)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                    >
                      Manage order
                    </span>
                  </Menu.Button>
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logoutHandler}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block w-full text-left px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
        <SliderCart open={open} setOpen={setOpen} />
      </Menu>
    </div>
  );
};

export default ProfileAvatar;
