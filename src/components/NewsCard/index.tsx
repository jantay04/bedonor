import React from 'react'

type Props = {
    id: number,
    title: string,
    description: string,
    dateOfCreate: string,
    img: any
}

function NewsCard({ id, title, description, dateOfCreate, img }: Props) {
    return (
        <>
            <div className='bg-[#EBEDEE] rounded-lg rounded-full object-cover'>
                <div className=''>
                    <img src={img} alt='NewsImg' className=' w-[100%] h-[200px] object-cover ' />
                </div>
                <div className='p-4 grid gap-2'>
                    <p className='text-[#2A5573]/50'>{dateOfCreate}</p>
                    <h3 className='text-[#2A5573] font-bold text-lg'>{title}</h3>
                    <p className='text-[#2A5573]/50'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default NewsCard