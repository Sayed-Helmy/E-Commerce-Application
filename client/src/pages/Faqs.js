import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Faqs = () => {
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-28 sm:px-6 md:max-w-7xl lg:px-8">
      <h2 className=" text-3xl font-semibold leading-9 text-gray-800 md:leading-7 lg:text-4xl lg:leading-9">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
        <div className=" ">
          <p className=" text-base font-normal leading-6 text-gray-600 md:w-9/12 lg:w-8/12 ">
            Here are few of the most frequently asked questions by our valueable
            customers
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center md:mt-16 md:flex-row md:space-x-8">
        <div className=" flex h-full w-full items-center justify-center rounded-lg bg-gray-100 py-16 md:w-5/12 lg:w-4/12">
          <img
            src="./../assets/category-3.png"
            alt="Img of macbook"
            className="hidden w-full md:block"
          />
          <img
            src="./../assets/category-3.png"
            alt="Img of macbook"
            className="block w-full md:hidden "
          />
        </div>
        <div className="w-full sm:mt-14 md:mt-0 md:w-7/12 lg:w-8/12">
          <div className="w-full px-4 ">
            <div className="mx-auto w-full  rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-6   text-left text-sm font-medium text-gray-900 ring-1 ring-black/50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span className="text-base">
                        What is your refund policy?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" px-4  py-8 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-6   text-left text-sm font-medium text-gray-900 ring-1 ring-black/50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span className="text-base">
                        Is there any limitation on the quantity or amount of
                        online purchase?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" px-4 py-8 text-sm text-gray-500">
                      No, there is no limit. The quantity that you can buy is
                      depending on the available stock of the online purchase.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-6   text-left text-sm font-medium text-gray-900 ring-1 ring-black/50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span className=" text-base ">
                        What are the cards acceptable for online purchases?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" px-4 py-8 text-sm text-gray-500">
                      All major credit cards like Visa, MasterCard.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-4 ">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-6  text-left text-sm font-medium text-gray-900 ring-1 ring-black/50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span className="text-base ">
                        My credit card was not issued in Egypt, can I use the
                        card to purchase online?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" px-4 py-8 text-sm text-gray-500">
                      Yes.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
