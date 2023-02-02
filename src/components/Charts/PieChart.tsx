import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  chartData: any;
};

function PieChart({ chartData }: Props) {
  return (
    <>
      <Pie data={chartData} />
    </>
  );
}

export default PieChart;
