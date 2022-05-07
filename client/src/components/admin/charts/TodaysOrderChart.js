import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["Todays Orders"];

export function TodaysOrderChart() {
  const ordersStates = useSelector((state) => state.admin.ordersStates);
  const todaysOrders = ordersStates?.data?.find(
    (item) =>
      new Date(item._id).toLocaleDateString() ===
      new Date().toLocaleDateString()
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Todays Orders",
        data: [todaysOrders?.ordersCount || 0],
        backgroundColor: "#10b981",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
