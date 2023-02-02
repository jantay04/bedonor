import React, { useState } from 'react'
import AdminLayout from '../../../components/Layout/AdminLayout/AdminHeader'
import PieChart from '../../../components/Charts/PieChart'
import { Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { BarChart } from '../../../components/Charts/BarChart'
import AdminSearch from '../../../components/AdminSearch'
import AdminTable from '../../../components/AdminTable'
import AdminCalendar from '../../../components/AdminCalendar'

type Props = {}



function AdminPanelDonorPage({ }: Props) {

    const SexData = {
        labels: ['Женщин - 40%', 'Мужчин - 60%',],
        datasets: [
            {
                label: '# of Votes',
                data: [40, 60],
                backgroundColor: [
                    '#C53FB7',
                    '#3A7EE3',
                ],
                borderColor: [
                    'white',
                    'white',
                ],
                borderWidth: 1,
            },
        ],
    };

    const BloodyData = {
        labels: ['О (I) Rh+ ', 'A (I) Rh+', 'B (I) Rh+', 'AB (I) Rh+', 'О (I) Rh-', 'A (I) Rh-', 'B (I) Rh-', 'AB (I) Rh-'],
        datasets: [{
            label: '',
            data: [40, 10, 10, 2.5, 6, 7, 6.6, 1.5],
            backgroundColor: [
                '#63A375',
                '#E6AF2E',
                '#7768AE',
                '#FA8334',
                '#339989',
                '#226CE0',
                '#DA5552'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    return (
        <AdminLayout>
            <div className='container mx-auto p-4'>
                <div className='grid gap-4'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='bg-[#D1E5F2] p-4 rounded-lg'>
                            <PieChart chartData={SexData} />
                        </div>
                        <div className='col-span-2 bg-[#D1E5F2] p-4 rounded-lg'>
                            <BarChart chartData={BloodyData} />
                        </div>
                    </div>
                    <div>
                        <AdminCalendar/>
                    </div>
                    <div className='grid grid-cols-2'>
                        <AdminSearch />
                    </div>
                    <div>
                        <AdminTable/>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminPanelDonorPage