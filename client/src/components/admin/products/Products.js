import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { productsActions } from "../../../store/productsSlice";
import DataTableBase from "../table/DataTableBase";

function Products() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const deleteHandler = async (_e, id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/products/${id}`, {
        withCredentials: true,
      });
      dispatch(productsActions.deleteProduct(id));
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
      });
    }
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Rating",
      selector: (row) => `${row.rating}/5`,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <div className="flex  flex-col gap-1  text-xs font-semibold tracking-wider ">
            <div className="p-1 lg:mt-2">
              <Link
                to={`/admin/products/${row._id}`}
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
        to="/admin/products/addnew"
        className="float-right mb-4 bg-black px-6 py-3 text-white"
      >
        Add new
      </Link>
      <DataTableBase
        columns={columns}
        data={products}
        progressPending={!products}
        selectableRows
      />
    </div>
  );
}

export default Products;
