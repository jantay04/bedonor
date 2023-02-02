import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import HealthCard from '../../components/HealthCard/index'
import first from './assets/1.svg'
import second from './assets/2.svg'
import third from './assets/3.svg'
import fourth from './assets/4.svg'
import fifth from './assets/5.svg'
import sixth from './assets/6.svg'
import seventh from './assets/7.svg'
import eighth from './assets/8.svg'
import ninth from './assets/1.svg'

type Props = {}

function HealthPage({ }: Props) {

    const newsArray = [
        {
            id: 1,
            title: "УЗИ",
            credits:"от 100 баллов",
            img: first,
        },
        {
            id: 2,
            title: "МАССАЖ",
            credits:"от 100 баллов",
            img: second,
        },
        {
            id: 3,
            title: "ТЕРАПЕВТ",
            credits:"от 100 баллов",
            img: third,
        },
        {
            id: 4,
            title: "СТОМАТОЛОГ",
            credits:"от 100 баллов",
            img: fourth,
        },
        {
            id: 5,
            title: "ЛЕКАРСТВА",
            credits:"от 100 баллов",
            img: fifth,
        },
        {
            id: 6,
            title: "ЛЕКАРСТВА",
            credits:"от 200 баллов",
            img: sixth,
        },
        {
            id: 7,
            title: "РЕНТГЕН",
            credits:"от 100 баллов",
            img: seventh,
        },
        {
            id: 8,
            title: "ИНЪЕКЦИИ",
            credits:"от 100 баллов",
            img: eighth,
        },
        {
            id: 9,
            title: "АНАЛИЗЫ",
            credits:"от 100 баллов",
            img: ninth,
        },
    ]

    return (
        <MainLayout>
            <div className='container mx-auto p-4'>
            <h4 className='py-6 text-[#2A5573]'>Приобретите мед услуги на ваши баллы</h4>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                    {newsArray && newsArray.map((item) =>
                        <HealthCard id={item.id} title={item.title} credits={item.credits} img={item.img} />
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default HealthPage