import React from 'react'
import logoIcon from '../ProfileSideBar/assets/logo.svg'
import profileIcon from '../ProfileSideBar/assets/profile.svg'
import achivementsIcon from '../ProfileSideBar/assets/achivements.svg'
import historyIcon from '../ProfileSideBar/assets/story-list.svg'
import healthIcon from '../ProfileSideBar/assets/health.svg'
import settingsIcon from '../ProfileSideBar/assets/settings.svg'
import logoutIcon from '../ProfileSideBar/assets/logout.svg'

import { Link, useLocation } from 'react-router-dom'
type Props = {}

type LinkProps = {
    tittle: string,
    icon: string,
    url: string
}

function ProfileSideBar({ }: Props) {


    const sidebarLinks = [
        {
            id: 1,
            tittle: "Профиль",
            icon: profileIcon,
            url: "",
            position: 'top'
        },
        {
            id: 2,
            tittle: "Достижения",
            icon: achivementsIcon,
            url: "mybooks",
            position: 'top'
        },
        {
            id: 3,
            tittle: "История",
            icon: historyIcon,
            url: "myblog",
            position: 'top'
        },
        {
            id: 4,
            tittle: "Здоровье",
            icon: healthIcon,
            url: "writebook",
            position: 'top'
        },
        {
            id: 5,
            tittle: "Настройки",
            icon: settingsIcon,
            url: "settings",
            position: 'bottom'
        },
        {
            id: 6,
            tittle: "Выйти",
            icon: logoutIcon,
            url: "exit",
            position: 'bottom'
        },
    ]

    const router = useLocation()

    const ProfileLink = ({ tittle, icon, url }: LinkProps) => {
        return (
            <Link to={`/${url}`} className=''>
                <div className={`flex items-center rounded py-[14px] px-[8px] ease-in-out duration-150 hover:bg-[#D1E5F2]`}>
                    <div className=''>
                        <img src={icon} alt='icon' className='' />
                    </div>
                    <p className='font-semibold'>
                        {tittle}
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <div className="flex flex-col w-[240px] h-full justify-between bg-[#2A5573]">
            <div className="">
                <Link to={'/'}>
                    <img src={logoIcon} alt="logo"/>
                </Link>
            </div>
            <div className=''>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "top").map((item) => (
                        <ProfileLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "bottom").map((item) => (
                        <ProfileLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar