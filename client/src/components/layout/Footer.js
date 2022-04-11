import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="max-w-2xl mx-auto  px-4 sm:px-6 md:max-w-7xl lg:px-8">
        <div className="flex flex-row justify-between ">
          <div className="">
            <Link to="/">
              <span className="sr-only">Logo</span>
              <img className="w-auto h-8" src="/assets/logo.svg" alt="" />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center justify-center space-x-8 text-sm">
            <li>
              <Link to="/" className="font-bold hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold hover:underline">
                Contact
              </Link>
            </li>
            to
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between pb-3">
          <div className="my-2 text-center">All rights reserved</div>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
