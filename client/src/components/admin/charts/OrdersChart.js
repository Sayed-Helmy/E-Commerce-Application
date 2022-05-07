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
import { faker } from "@faker-js/faker";
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

const labels = ["Orders data"];

export const data = {
  labels,
  datasets: [
    {
      label: "pending",
      data: [123],
      backgroundColor: "#64748b",
    },
    {
      label: "in review",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#000",
    },
    {
      label: "in progress",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#0ea5e9",
    },
    {
      label: "on the way",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#eab308",
    },
    {
      label: "delivered",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#16a34a",
    },
  ],
};

export function OrdersChart() {
  const ordersStatus = useSelector(
    (state) => state.admin.ordersStates.ordersStatus
  );

  data.datasets = ordersStatus?.map((item) => {
    switch (item._id) {
      case "Pending":
        return {
          label: "Pending",
          data: [item.ordersCount],
          backgroundColor: "#64748b",
        };
      case "in Review":
        return {
          label: "in review",
          data: [item.ordersCount],
          backgroundColor: "#000",
        };
      case "in progress":
        return {
          label: "in progress",
          data: [item.ordersCount],
          backgroundColor: "#0ea5e9",
        };
      case "canceled":
        return {
          label: "in progress",
          data: [item.ordersCount],
          backgroundColor: "#4c0707",
        };
      case "on the way":
        return {
          label: "on the way",
          data: [item.ordersCount],
          backgroundColor: "#eab308",
        };
      case "deliverd":
        return {
          label: "delivered",
          data: [item.ordersCount],
          backgroundColor: "#16a34a",
        };
      default:
        return {
          label: "- in progress",
          data: [item.ordersCount],
          backgroundColor: "#0ea5e9",
        };
    }
  });
  return <>{ordersStatus && <Bar options={options} data={data} />}</>;
}
