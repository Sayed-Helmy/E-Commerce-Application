import React from "react";
import DataTable from "react-data-table-component";
import { ArrowSmUpIcon } from "@heroicons/react/solid";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      paddingTop: "36px",
      paddingBottom: "36px",
      height: "40px",
    },
  },
  headCells: {
    style: {
      minHeight: "40px",
      paddingTop: "24px",
      paddingBottom: "24px",
      backgroundColor: "#000",
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
const sortIcon = <ArrowSmUpIcon />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

function DataTableBase(props) {
  return (
    <DataTable
      pagination
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      responsive
      striped
      selectableRowsHighlight
      fixedHeader
      progressPending
      customStyles={customStyles}
      {...props}
    />
  );
}

export default DataTableBase;
