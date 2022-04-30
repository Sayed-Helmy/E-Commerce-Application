import React from "react";
import { Link } from "react-router-dom";
import OrdersModal from "./OrdersModal";
import DataTableBase from "../table/DataTableBase";

const columns = [
  {
    name: "Order Id",
    selector: (row) => row.id,
    sortable: true,
    // cell: (row, index, column, id) => <Select />,
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
    selector: (row) => row.user,
    sortable: true,
  },
  {
    name: "Created Date",
    selector: (row) => row.createdDate,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row, index, column, id) => (
      <>
        <div className=" flex flex-row gap-2 text-xs font-semibold tracking-wider">
          <div className="mr-2 rounded-lg bg-blue-200 px-4 py-2 ">
            <Link to="/">update</Link>
          </div>
          <div className="mr-2 rounded-lg bg-red-200 px-4 py-2">
            <Link to="/">delete</Link>
          </div>
        </div>
      </>
    ),
  },
];

const data = [
  {
    id: 1,
    status: "shipped",
    paymentStatus: "paid",
    user: "mohamed@gmail.com",
    createdDate: "12/2/2022",
  },
  {
    id: 2,
    status: "shipped",
    paymentStatus: "paid",
    user: "sayed@gmail.com",
    createdDate: "13/2/2022",
    // cell: (row, index, column, id) => {
    //   <Title />;
    // },
  },
];

function Orders() {
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <DataTableBase
        columns={columns}
        data={data}
        progressPending={false}
        selectableRows
        subHeaderComponent={<Title />}
      />
      <OrdersModal />
    </div>
  );
}

export default Orders;

export function Title() {
  return <div>zzzzzzzzzz</div>;
}
