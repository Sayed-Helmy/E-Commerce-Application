import React from "react";
// import Map from "./table/Map";
import Table, {
  StatusPill,
  LocateCell,
  GlobalFilter,
  SelectColumnFilter,
} from "./table/Table";
import "./table/styles.css";
// import { MapProvider } from "./table/map-context";

const getData = () => [
  {
    name: "user1",
    email: "jane.cooper@example.com",
    title: "user name",
    department: "Optimization",
    status: "Active",
    role: "user",
    locate: "Locate1",
    posCoords: [260, 900],
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Users() {
  // const [mapFly, setMapFly] = useState(null);

  const columns = React.useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "name",
        Filter: GlobalFilter,
      },
      {
        Header: "category",
        accessor: "title",
      },
      {
        Header: "Locate",
        accessor: "locate",
        Cell: LocateCell,
        posAccessor: "posCoords",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="App" style={{ height: "100%" }}>
        <div className="min-h-screen  text-gray-900">
          <main className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8">
            <div className="">
              <h1 className="text-xl font-semibold">Users</h1>
            </div>
            <div className="mt-4">
              <Table columns={columns} data={data} />
              {/* <Table columns={columns} data={data} map={mapFly} /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
