import React, { useState } from "react";
import OrdersModal from "./OrdersModal";
import DataTableBase from "../table/DataTableBase";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.admin.orders);
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState();

  const infoHandler = (_e, row) => {
    const selectedOrder = orders.find((i) => i._id === row._id);
    setOrder(selectedOrder);
  };
  const deleteHandler = () => {};

  const columns = [
    {
      name: "Order Id",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.paymentStatus,
      sortable: true,
    },
    {
      name: "User",
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <div className="flex  flex-col gap-1  text-xs font-semibold tracking-wider ">
            <div className="p-1 lg:mt-2">
              <button
                onClick={(e) => {
                  infoHandler(e, row);
                  setIsOpen(true);
                }}
                className="rounded-md border border-black/50 bg-black px-4 py-2 text-white"
              >
                update
              </button>
            </div>
            <div className="p-1">
              <button
                onClick={(e) => deleteHandler(e, row._id)}
                className="rounded-md border border-black/50 bg-white px-4 py-2 text-black"
              >
                delete
              </button>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <DataTableBase
        columns={columns}
        data={orders}
        progressPending={false}
        selectableRows
        subHeaderComponent={<Title />}
      />
      <OrdersModal setIsOpen={setIsOpen} isOpen={isOpen} order={order} />
    </div>
  );
}

export default Orders;

export function Title() {
  return <div>zzzzzzzzzz</div>;
}
