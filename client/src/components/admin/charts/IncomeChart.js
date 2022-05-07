import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import axios from "axios";
import { adminActions } from "../../../store/adminSlice";

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

const data = {
  labels,
  datasets: [
    {
      label: "income",
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: "#000",
      backgroundColor: "#fff",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
  ],
};

export function IncomeChart() {
  const [ordersData, setOrdersData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/orders/admin/states", {
        withCredentials: true,
      })
      .then((res) => {
        setOrdersData(res.data);
        dispatch(adminActions.setOrdersStates(res.data));
      });
  }, [dispatch]);
  ordersData?.data?.forEach((item) => {
    data.datasets[0].data[item._id.split("-")[2] - 1] = item.totalPrice;
  });
  return <>{ordersData && <Line options={options} data={data} />}</>;
}
