import React from 'react'

type Props = {
    id: number,
    title: string,
    credits: string,
    img: any
}

function HealthCard({ id, title, credits, img }: Props) {
    return (
        <>
            <div className='bg-[#D1E5F2] rounded-lg rounded-full object-cover'>
                <div className=''>
                    <img src={img} alt='NewsImg' className=' w-[100%] h-[150px] object-cover ' />
                </div>
                <div className='p-4 grid gap-2'>
                    <h5 className='text-[#2A5573] font-bold text-lg'>{title}</h5>
                    <p className='text-[#2A5573]/50'>{credits}</p>
                </div>
            </div>
        </>
    )
}

export default HealthCard