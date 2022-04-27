import React from "react";
import { IncomeChart } from "./charts/IncomeChart";
import { NewCustomersChart } from "./charts/NewCustomersChart";
import { OrdersChart } from "./charts/OrdersChart";
import { TodaysOrderChart } from "./charts/TodaysOrderChart";
import { UserChart } from "./charts/UserChart";

function Dashboard() {
  return (
    <div className=" mx-auto grid grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 md:max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:px-8">
      <div className="rounded-2xl bg-slate-100 p-8">
        <h2 className="my-4 text-center text-lg font-bold">users data</h2>
        <UserChart />
      </div>
      <div className="flex h-full flex-col justify-center rounded-2xl bg-slate-100 p-8">
        <h2 className="my-4 text-center text-lg font-bold"> income data</h2>
        <IncomeChart />
      </div>
      <div className="flex h-full flex-col justify-center rounded-2xl bg-slate-100 p-8">
        <h2 className="my-4 text-center text-lg font-bold">
          New Customers data
        </h2>
        <NewCustomersChart />
      </div>
      <div className="flex h-full flex-col justify-center rounded-2xl bg-green-100 p-8 md:order-4 md:col-span-2 lg:order-3">
        <h2 className="my-4 text-center text-lg font-bold">Orders data</h2>
        <OrdersChart />
      </div>
      <div className="flex h-full flex-col justify-center rounded-2xl bg-green-100 p-8 lg:order-4">
        <h2 className="my-4 text-center text-lg font-bold">Todays Orders</h2>
        <TodaysOrderChart />
      </div>
    </div>
  );
}

export default Dashboard;
