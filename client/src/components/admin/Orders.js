import React from "react";
import { toast } from "react-toastify";
import OrdersModal from "./Orders/OrdersModal";
import DataTableBase from "./table/DataTableBase";
import Select from "./table/Select";

// documentation : https://react-data-table-component.netlify.app/

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
      <DataTableBase columns={columns} data={data} progressPending={false} selectableRows subHeaderComponent={<Title />} />
      <OrdersModal />
    </div>
  );
}

export default Orders;

export function Title() {
  return <div>zzzzzzzzzz</div>;
}
