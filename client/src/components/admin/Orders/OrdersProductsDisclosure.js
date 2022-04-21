import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import OrdersProductRow from "./OrdersProductRow";

export default function OrdersProductsDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
                <span>Products</span>
                <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
              </Disclosure.Button>
              <Disclosure.Panel className=" space-y-2 pt-4 pb-2 text-sm text-white">
                <div className=" col-span-4 space-y-4  md:col-span-4 lg:col-span-3">
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
