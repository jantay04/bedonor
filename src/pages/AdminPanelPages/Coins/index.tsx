import React, { useState } from "react";
import AdminLayout from "../../../components/Layout/AdminLayout/AdminHeader";
import PieChart from "../../../components/Charts/PieChart";
// import { Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { BarChart } from "../../../components/Charts/BarChart";
import AdminSearch from "../../../components/AdminSearch";
import AdminTable from "../../../components/AdminTable";
import AdminCalendar from "../../../components/AdminCalendar";

type Props = {};

function AdminCoinsDonorPage({}: Props) {
  const BloodyData = {
    labels: [
      "Новичок",
      "Спасатель",
      "Герой",
      "Супер герой",
      "Идеальная кровь",
      "Снова в строю",
      "Путешественник",
      "Активный",
    ],
    datasets: [
      {
        label: "",
        data: [40, 10, 10, 2.5, 6, 7, 6.6, 1.5],
        backgroundColor: [
          "#63A375",
          "#E6AF2E",
          "#7768AE",
          "#FA8334",
          "#339989",
          "#226CE0",
          "#DA5552",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <div className="grid gap-4">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 bg-[#D1E5F2] p-4 rounded-lg">
              <BarChart chartData={BloodyData} />
            </div>
            <div className="col-span-2">
              <AdminCalendar />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <AdminSearch />
          </div>
          <div>
            <AdminTable />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminCoinsDonorPage;
