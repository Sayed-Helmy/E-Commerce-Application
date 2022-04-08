import React from "react";

const Footer = () => {
  return <div>
    <footer className="max-w-2xl mx-auto  px-4  sm:px-6 md:max-w-7xl lg:px-8">
      <div className="flex flex-col justify-center space-y-5">
        <div className="mx-auto ">
          <a to="/">
            <span className="sr-only">Logo</span>
            <img className="w-auto h-8" src="./assets/logo.svg" alt="" />
          </a>
        </div>
        <ul className="flex flex-wrap items-center justify-center space-x-8 text-sm">
            <li>
                <a href="#" className="font-bold hover:underline">Home</a>
            </li>
            <li>
                <a href="#" className="font-bold hover:underline">Pages</a>
            </li>
            <li>
                <a href="#" className="font-bold hover:underline">Contact</a>
            </li>
        </ul>
      </div>
      <hr className="my-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="my-2 text-center">All rights reserved</div>
        <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Terms of Service</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Cookies Settings</a>
            </li>
        </ul>
      </div>
    </footer>
  </div>;
};

export default Footer;
