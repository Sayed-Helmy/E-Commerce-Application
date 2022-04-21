import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ProfileAvatar from "../layout/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userActions } from "../../store/userSlice";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "admin/dashboard", current: true },
  { name: "brands", href: "#", current: false },
  { name: "categories", href: "admin/categories", current: false },
  { name: "Products", href: "admin/products", current: false },
  { name: "orders", href: "admin/orders", current: false },
  { name: "Users", href: "admin/users", current: false },
  { name: "statistics", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminNavigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logoutHandler = async () => {
    await axios.get("http://localhost:5000/api/v1/auth/logout", {
      withCredentials: true,
    });
    dispatch(userActions.setUser(null));
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <ProfileAvatar
                        user={user}
                        logoutHandler={logoutHandler}
                      />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user?.avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user?.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main> */}
      </div>
    </>
  );
}

export default AdminNavigation;
