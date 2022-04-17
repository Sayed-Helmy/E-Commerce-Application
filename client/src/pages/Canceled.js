import { XCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";

const Canceled = () => {
  const [query] = useSearchParams();
  useEffect(() => {
    const cancelId = query.get("id");
    if (cancelId && cancelId?.length > 10) {
      axios.get(`http://localhost:5000/api/v1/checkout?id=${cancelId}`);
    }
  }, [query]);
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-red-500">
      {/* <img src="./assets/order_placed.png" alt="order placed" /> */}
      <XCircleIcon className="w-40" />
      <h2 className=" mt-8 mb-10 text-3xl capitalize tracking-tight">
        your order has been canceled
      </h2>
      <Button
        text="Back to Checkout"
        className=" bg-white text-black ring-1 ring-black hover:bg-gray-100"
        to="/checkout"
      />
    </div>
  );
};

export default Canceled;
