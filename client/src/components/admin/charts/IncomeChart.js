import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels,
  datasets: [
    {
      label: "income",
      data: [20, 10, 20, 40, 44, 33, 11],
      borderColor: "#000",
      backgroundColor: "#fff",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
  ],
};

export function IncomeChart() {
  return <Line options={options} data={data} />;
}
