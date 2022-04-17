import { CheckCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { cartActions } from "../store/cartSlice";

const Success = () => {
  const [query] = useSearchParams();
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const successId = query.get("id");
    if (successId && successId?.length > 10) {
      axios
        .get(`http://localhost:5000/api/v1/checkout?id=${successId}`)
        .then((res) => {
          setOrderId(res.data.order._id);
        })
        .then((data) => dispatch(cartActions.setCart([])));
    }
  }, [query, dispatch]);
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-green-500">
      <CheckCircleIcon className="w-40" />
      <h2 className=" mt-8 mb-4 text-3xl capitalize tracking-tight">
        your order placed successfully
      </h2>
      {orderId && (
        <p className="mb-5 text-2xl capitalize tracking-tight text-red-500">
          Ref Number: {orderId}
        </p>
      )}
      <Button
        text="Go to home"
        className=" bg-white text-black ring-1 ring-black hover:bg-gray-100"
        to="/"
      />
    </div>
  );
};

export default Success;
