import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {
    chartData: any
}

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
            position: 'top' as const,
        },
        // title: {
        //   display: true,
        //   text: 'Статистика типы кровей',
        // },
    },
};


export function BarChart({chartData}:Props) {
    return <Bar options={options} data={chartData} />;
}
