import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTableBase from "../table/DataTableBase";

function Products() {
  const categories = useSelector((state) => state.products.categories);
  const deleteHandler = (e, id) => {
    console.log(id);
  };
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Featured",
      selector: (row) => row.featured.toString(),
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <div className="flex  flex-col gap-1  text-xs font-semibold tracking-wider ">
            <div className="p-1 lg:mt-2">
              <Link
                to={`/admin/categories/${row._id}`}
                className="rounded-md border border-black/50 bg-black px-4 py-2 text-white"
              >
                update
              </Link>
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
      <Link
        to="/admin/categories/addnew"
        className="float-right mb-4 bg-black px-6 py-3 text-white"
      >
        Add new
      </Link>
      <DataTableBase
        columns={columns}
        data={categories}
        progressPending={!categories}
        selectableRows
      />
    </div>
  );
}

export default Products;
