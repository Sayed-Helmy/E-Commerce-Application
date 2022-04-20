import React from "react";
import { Tab } from "@headlessui/react";
import ChooseAddress from "./chooseAddress";
import ChangePassword from "./changePassword";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChangeInfo = () => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex mt-5 mb-2">
          <Tab className={({ selected }) => classNames("w-full py-2.5 px-1 text-base", selected ? "rounded-lg bg-black text-white" : "")}>Addresses</Tab>
          <Tab className={({ selected }) => classNames("w-full whitespace-nowrap py-2.5 px-1	text-base", selected ? "rounded-lg bg-black text-white" : "")}>Change Password</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Choose Address Component */}
            <ChooseAddress />
          </Tab.Panel>
          <Tab.Panel>
            {/* Change Password Component */}
            <ChangePassword />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default ChangeInfo;
