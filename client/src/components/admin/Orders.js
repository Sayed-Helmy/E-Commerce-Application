import React from "react";
import { toast } from "react-toastify";
import DataTableBase from "./table/DataTableBase";
import Select from "./table/Select";

// documentation : https://react-data-table-component.netlify.app/

const columns = [
  {
    name: "order",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "test",
    selector: (row) => row.zip,
    cell: (row, index, column, id) => <Select />,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    status: "shipped",
    button: true,
    cell: (row, index, column, id) => {
      <Title />;
    },
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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
    </div>
  );
}

export default Orders;

export function Title() {
  return <div>zzzzzzzzzz</div>;
}
