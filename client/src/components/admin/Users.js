import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTableBase from "./table/DataTableBase";

function UsersOverview() {
  const user = useSelector((state) => state.admin.users);

  const columns = [
    {
      name: "id",
      selector: (row) => row._id,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "status",
      selector: (row) => row.status,
    },
    {
      name: "Actions",
      // selector: (row) => row.price,
      cell: (row, index, column, id) => (
        <>
          <div className=" flex flex-col gap-1 text-xs font-semibold tracking-wider md:flex-row">
            <div className="m-2">
              <Link
                to={`/admin/users/${row._id}`}
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
        data={user}
        progressPending={false}
        selectableRows
      />
    </div>
  );
}

export default UsersOverview;
