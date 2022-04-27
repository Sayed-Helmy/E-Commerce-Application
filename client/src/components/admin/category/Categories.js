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
          <div className="flex flex-row gap-1 text-xs font-semibold tracking-wider">
            <div className="mr-2 rounded-md bg-green-500 px-4 py-2  text-white">
              <Link to={`/admin/categories/${row._id}`}>update</Link>
            </div>
            <div className="mr-2 rounded-md bg-red-600 px-4 py-2 text-white">
              <button onClick={(e) => deleteHandler(e, row._id)}>delete</button>
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
