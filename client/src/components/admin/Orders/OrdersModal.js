import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import OrdersInfo from "./OrdersInfo";

export default function OrdersModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button type="button" onClick={openModal} className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className="my-8 inline-block w-full max-w-7xl transform overflow-hidden rounded-2xl border-4 border-teal-700  bg-teal-600/90 px-2 py-6 text-left align-middle shadow-xl transition-all sm:px-6 sm:py-12 lg:px-12">
                <Dialog.Title as="h3" className="text-center text-2xl font-bold leading-6 text-white">
                  Order Details
                </Dialog.Title>
                <div className="">
                  <p className="">
                    <OrdersInfo />
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
