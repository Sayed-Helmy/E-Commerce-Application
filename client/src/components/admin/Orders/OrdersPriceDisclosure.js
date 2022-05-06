import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function OrdersPriceDisclosure({ order }) {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-30 flex items-center gap-4 whitespace-nowrap rounded-l-lg bg-black py-1	px-3 text-white transition-all duration-200 ease-in-out">
                <span>Price</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" space-y-2 pt-4 pb-2 text-sm text-black">
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3 font-bold ">
                    Total
                  </p>
                  <p>${order.totalPrice}</p>
                </div>
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3	font-bold">
                    Discount
                  </p>
                  <p>${order.amountDiscount}</p>
                </div>
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3	font-bold">
                    Subtotal
                  </p>
                  <p>${order.priceSubtotal}</p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
