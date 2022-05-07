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

export const data = {
  labels,
  datasets: [
    {
      label: "Todays Orders",
      data: [100],
      backgroundColor: "#10b981",
    },
  ],
};

export function TodaysOrderChart() {
  return <Bar options={options} data={data} />;
}
