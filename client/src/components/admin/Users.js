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
        <div className=" flex flex-col gap-1 text-xs font-semibold tracking-wider md:flex-row">
          <div className="m-2">
            <Link
              to="/"
              className="rounded-lg border border-black/50 bg-black px-4 py-2 text-white "
            >
              change status
            </Link>
          </div>
          <div className="m-2">
            <Link
              to="/"
              className="rounded-lg border border-black/50 bg-white px-4 py-2 text-black"
            >
              delete
            </Link>
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
