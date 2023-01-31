import React from 'react'
import logoSvg from '../../../assets/logowhite.svg'
import settingsIcon from '../assets/settings.svg'
import exitIcon from '../assets/exit.svg'
import achievementSvg from '../assets/achievement.svg'
import historySvg from '../assets/history.svg'
import servicesSvg from '../assets/services.svg'
import personIcon from '../assets/person.svg'
import reviewIcon from '../assets/review.svg'
import { Link, useLocation } from 'react-router-dom'
type Props = {}

type NavbarLinkProps = {
    tittle: string,
    icon: string,
    url: string
}

function PersonalAreaSidebar({ }: Props) {


    const sidebarLinks = [
        {
            id: 1,
            tittle: "Профиль",
            icon: personIcon,
            url: "",
            position: 'top'
        },
        {
            id: 2,
            tittle: "Достижение",
            icon: achievementSvg,
            url: "achievement",
            position: 'top'
        },
        {
            id: 3,
            tittle: "История",
            icon: historySvg,
            url: "history",
            position: 'top'
        },
        {
            id: 4,
            tittle: "Мед услуги",
            icon: servicesSvg,
            url: "services",
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
            icon: exitIcon,
            url: "exit",
            position: 'bottom'
        },
    ]

    const router = useLocation()

    const NavbarLink = ({ tittle, icon, url }: NavbarLinkProps) => {
        return (
            <Link to={`/profile/${url}`} className=''>
                <div className={`flex items-center rounded py-[14px] px-[8px] ease-in-out duration-150 hover:bg-[#D1E5F2] hover:text-[#2A5573]`}>
                    <div className='mr-[8px]'>
                        <img src={icon} alt='icon' className='h-[20px] w-[20px] text-ourred' />
                    </div>
                    <p className='font-medium'>
                        {tittle}
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <div className="max-md:w-screen1/2 p-[20px] md:p-[40px] border-r flex flex-col bg-[#2A5573] text-[#ffffff]">
            <div className="pb-[50px] flex justify-center items-center">
                <Link to={'/'}>
                    <img src={logoSvg} alt="logo" className="h-[18px]" />
                </Link>
            </div>
            <div className='w-[160px] h-full mt-[40px] flex flex-col justify-between'>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "top").map((item) => (
                        <NavbarLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "bottom").map((item) => (
                        <NavbarLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonalAreaSidebar