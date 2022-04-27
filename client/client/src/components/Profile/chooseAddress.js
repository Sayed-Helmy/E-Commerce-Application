import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const addresses = [
  {
    id: "x1",
    address: "Cairo, Giza, Mansoura",
    country: "Egypt",
    phone: "0100 500 0000",
  },
  {
    id: "x2",
    address: "Cairo, Giza, Mansoura",
    country: "Egypt",
    phone: "0100 500 0000",
  },
  {
    id: "x3",
    address: "Cairo, Giza, Mansoura",
    country: "Egypt",
    phone: "0100 500 0000",
  },
];

export default function ChooseAddress() {
  const [selected, setSelected] = useState(addresses[0]);
  console.log(selected);
  return (
    <form>
      <div className="w-full px-4 py-12">
        <div className="w-full max-w-md mx-auto">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Choose Addresses</RadioGroup.Label>
            <div className="space-y-2">
              {addresses.map((address) => (
                <RadioGroup.Option
                  key={address.id}
                  value={address}
                  className={({ active, checked }) =>
                    `${active ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300" : ""}
                    ${checked ? "bg-black text-white" : "bg-white"}
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="text-sm ">
                            <RadioGroup.Label as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
                              {address.address}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="span" className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}>
                              <span>{address.country}</span>
                            </RadioGroup.Description>
                            <br></br>
                            <RadioGroup.Description as="span" className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}>
                              <span>{address.phone}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="flex-shrink-0 text-white">
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md ml-7 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Use as Default
      </button>
    </form>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
