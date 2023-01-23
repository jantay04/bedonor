import Button from '@mui/material/Button/Button'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import React from 'react'
import pic1 from './assets/pic1.svg'

type Props = {}

function MainSections({ }: Props) {
    return (
        <div className='max-w-7xl mx-auto p-4 my-[200px]'>
            <div className='grid grid-cols-12 gap-[32px] max-sm:gap-[10px] '>
                <div className='col-span-7 max-lg:col-span-12 text-center'>
                    <h1 className='text-[#2A5573] text-5xl font-bold max-md:text-4xl max-[520px]:text-2xl'>Спасай жизни, становясь донором крови</h1>
                    <p className='hover:text-red-700 text-[#2A5573] text-lg  mt-9 font-medium'>Каждый день множество людей в Кыргызстане нуждаются
                        в крови или ее компонентах для лечения или операций.
                        Вы можете быть тем, кто спасет их жизнь.
                        Присоединяйтесь к нам сегодня!</p>
                    <Button variant="contained" color="secondary" size="large" sx={{ textTransform: "none", marginTop: '36px', borderRadius: '16px', fontSize: '14px', padding: '16px 40px' }}>Стать донором</Button>
                </div>
                <div className='col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center '>
                    <img src={pic1} className='w-full' alt="graphic" />
                </div>
            </div>
        </div>
    )
}

export default MainSections