/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/ContactUs" },
  ],
};

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                {/* Mobile menu links */}
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.href}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                <div className="flow-root">
                  <Link
                    to="SigninPage"
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    Sign in
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    to="SignupPage"
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-gray-900 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="max-w-2xl mx-auto  px-4  sm:px-6 md:max-w-7xl lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Logo</span>
                  <img className="w-auto h-8" src="/assets/logo.svg" alt="" />
                </Link>
              </div>

              <div className="hidden lg:block">
                <ul className="flex ml-5 space-x-8 text-sm justify-center items-center">
                  <li>
                    <Link to="/" className="">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" className="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex items-center w-full space-x-4 ">
                {/* Search */}
                <form
                  action=""
                  className="flex flex-row-reverse items-center flex-1 ml-6 border-2 rounded-lg"
                >
                  <SearchIcon className="w-5 h-5 mx-3 " aria-hidden="true" />
                  <input
                    className="w-full py-1 mx-3 focus:outline-none"
                    type="search"
                    placeholder="What are you looking for?"
                  />
                  <span className="sr-only">Search</span>
                </form>

                <div className="hidden md:flex md:items-center md:justify-end md:space-x-6">
                  <Link
                    to="SigninPage"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </Link>
                  <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                  <Link
                    to="SignupPage"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>
                </div>

                {/* Cart */}
                <div className="flow-root lg:ml-6">
                  <Link to="#" className="flex items-center p-2 -m-2 group">
                    <ShoppingBagIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
