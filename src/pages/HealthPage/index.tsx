import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import HealthCard from '../../components/ServicesCard/index'
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

   

    return (
        <MainLayout>
            <div className='container mx-auto p-4'>
            <h4 className='py-6 text-[#2A5573]'>Приобретите мед услуги на ваши баллы</h4>
                {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                    {newsArray && newsArray.map((item) =>
                        <HealthCard id={item.id} title={item.title} credits={item.credits} img={item.img} />
                    )}
                </div> */}
            </div>
        </MainLayout>
    )
}

export default HealthPage