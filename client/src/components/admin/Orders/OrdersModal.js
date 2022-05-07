import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import OrdersInfo from "./OrdersInfo";

export default function OrdersModal({ setIsOpen, isOpen, order }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-6xl transform overflow-hidden rounded-2xl bg-slate-50  px-2 py-6 text-left align-middle shadow-2xl  transition-all sm:px-6 sm:py-12 lg:px-12">
                <Dialog.Title
                  as="h3"
                  className="text-center text-2xl font-bold leading-6 text-black"
                >
                  Order Details
                </Dialog.Title>
                <div className="">
                  <p className="">
                    <OrdersInfo order={order} setIsOpen={setIsOpen} />
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
