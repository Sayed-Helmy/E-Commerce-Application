import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import OrdersProductRow from "./OrdersProductRow";

export default function OrdersProductsDisclosure() {
  return (
    <div className="w-full">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-30 flex items-center gap-4 whitespace-nowrap rounded-l-lg bg-black py-1	px-3 text-white transition-all duration-200 ease-in-out">
                <span>Products</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" space-y-2 pt-4 pb-2 text-sm text-black">
                <div className=" w-full space-y-4">
                  <div>
                    <OrdersProductRow />
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
