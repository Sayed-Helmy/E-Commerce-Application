import React from "react";
import { Link } from "react-router-dom";
import DataTableBase from "./table/DataTableBase";

// documentation : https://react-data-table-component.netlify.app/

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },

  {
    name: "Actions",
    // selector: (row) => row.price,
    cell: (row, index, column, id) => (
      <>
        <div className=" flex flex-row gap-2 text-xs font-semibold tracking-wider">
          <div className="mr-2 rounded-lg bg-blue-200 px-4 py-2 ">
            <Link to="/">change status</Link>
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
    title: "Beetlejuice",
    desc: "Lorem ipsum dolor sit amet.",
    price: "400",
  },
  {
    id: 2,
    title: "Ghostbusters",
    desc: "Lorem ipsum dolor sit amet.",
    price: "400",
  },
];

function Products() {
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <Link
        to="/admin"
        className="float-right mb-4 bg-black px-6 py-3 text-white"
      >
        Add new
      </Link>
      <DataTableBase
        columns={columns}
        data={data}
        progressPending={false}
        selectableRows
      />
    </div>
  );
}

export default Products;
