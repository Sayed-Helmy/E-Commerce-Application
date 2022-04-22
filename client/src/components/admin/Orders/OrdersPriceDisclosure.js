import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function OrdersPriceDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-24 whitespace-nowrap rounded-l-lg bg-black py-1 px-3 text-white	">
                <span>Price</span>
                <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
              </Disclosure.Button>
              <Disclosure.Panel className=" space-y-2 pt-4 pb-2 text-sm text-white">
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3 text-white	">Subtotal</p>
                  <p>$310</p>
                </div>
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3 text-white	">Discount</p>
                  <p>$30</p>
                </div>
                <div className="flex">
                  <p className="w-28 whitespace-nowrap px-3 text-white	">Subtotal</p>
                  <p>$280</p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
