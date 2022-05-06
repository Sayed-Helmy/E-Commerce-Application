import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export function UserChart() {
  const users = useSelector((state) => state.admin.users);
  const active = users.filter((i) => i.status === "ACTIVE");
  const deactivated = users.filter((i) => i.status !== "ACTIVE");
  const data = {
    labels: ["active", "deactivated"],
    datasets: [
      {
        label: "# of users",
        data: [active.length, deactivated.length],
        backgroundColor: ["#000", "#f0f0f0"],
        borderColor: ["#fff", "#000"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
