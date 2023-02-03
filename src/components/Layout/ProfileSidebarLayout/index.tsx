import React, { Children } from 'react'
import PersonalAreaHeader from './PersonalAreaHeader';
import PersonalAreaSidebar from './PersonalAreaSidebar';
import style from './style.module.scss'

type Props = {
    children: React.ReactNode;
}

function ProfileSidebarLayout({ children }: Props) {

    return (
        <div className={` ${style.personalAreaLayout} `}>
            <div className={`${style.sidebar}  `}>
                <div className='max-md:hidden '>
                    <div className='fixed flex h-screen '>
                        <PersonalAreaSidebar />
                    </div>
                </div>
            </div>
            <div className={`${style.header} `}>
                <div className='p-[20px] sm:py-[30px]  sm:px-[40px] w-full'>
                    <PersonalAreaHeader />
                </div>
            </div>
            <div className={`${style.mainContent}`}>
                <div className='p-[20px] sm:py-[30px]  sm:px-[40px]  h-[calc(100%-40px)]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebarLayout