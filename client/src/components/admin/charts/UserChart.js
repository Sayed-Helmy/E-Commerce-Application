import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["active", "deactivated"],
  datasets: [
    {
      label: "# of users",
      data: [42, 19],
      backgroundColor: ["#000", "#f0f0f0"],
      borderColor: ["#fff", "#000"],
      borderWidth: 1,
    },
  ],
};

export function UserChart() {
  return <Doughnut data={data} />;
}
