import React from 'react'
import ProfileSidebarLayout from '../../../components/Layout/ProfileSidebarLayout'
import coinkeeper from "./assets/coinkeeper.svg";
import progress1 from "../../../components/MainSections/assets/progress4.svg";
import progress2 from "../../../components/MainSections/assets/progress1.svg";
import progress3 from "../../../components/MainSections/assets/progress2.svg";
import progress4 from "../../../components/MainSections/assets/progress3.svg";
import progress5 from "../../../components/MainSections/assets/progress8.svg";
import progress6 from "../../../components/MainSections/assets/progress5.svg";
import progress7 from "../../../components/MainSections/assets/progress6.svg";
import progress8 from "../../../components/MainSections/assets/progress7.svg";


type Props = {}

const progresses = [
    {
      id: 1,
      title: "Новичок",
      icon: progress1,
      isActive: false,
    },
    {
      id: 2,
      title: "Спасатель",
      icon: progress2,
      isActive: false,
    },
    {
      id: 3,
      title: "Герой",
      icon: progress3,
      isActive: false,
    },
    {
      id: 4,
      title: "Супер герой",
      icon: progress4,
      isActive: false,
    },
    {
      id: 5,
      title: "Идеальная кровь",
      icon: progress5,
      isActive: false,
    },
    {
      id: 6,
      title: "Снова в строю",
      icon: progress6,
      isActive: false,
    },
    {
      id: 7,
      title: "Путешественник",
      icon: progress7,
      isActive: false,
    },
    {
      id: 8,
      title: "Активный",
      icon: progress8,
      isActive: false,
    },
  ];

function UserAchievementPage({ }: Props) {
    return (
        <ProfileSidebarLayout>
            <h5 className="text-[20px] text-[#2A5573]">
         Ваши достижения
         </h5>
      <div className="container mx-auto mt-5 grid grid-cols-12 gap-[20px] max-sm:gap-[5px] text-[#2A5573]">
        <div className="col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center">
          <img className="mt-[100px]" src={coinkeeper} alt="" />
        </div>
        <div className='col-span-7 max-lg:col-span-12'>
        <p className="my-5">
            Каждый коин содержит в себе определенные баллы. Собирая коины, вы
            собираете баллы. Данные баллы вы можете обменять на любые мед
            услуги, указанные на нашем сайте. У каждой услуги по соответствию
            есть свои баллы. 
          </p>
          <p>
          Важно, баллы на вашем балансе и баллы мед услуг должны совпадать, иначе вы не сможете обменять. Желаем вам удачи!
          </p>
        <div className="bg-[#D1E5F2]  mt-[120px] rounded-2xl">
          <div className="container mx-auto p-4 grid min-[320px]:grid-cols-2 min-[460px]:grid-cols-3 sm:grid-cols-4 py-[60px] gap-[20px]">
            {progresses &&
              progresses.map((item) => (
                <div className={`flex flex-col items-center ${!item.isActive && "opacity-60"}`}>
                  <div>
                    <img className="w-[48px]" src={item.icon} alt="icon" />
                  </div>
                  <p className="text-[#2A5573] text-xs mt-3 font-bold text-center">{item.title}</p>
                </div>
              ))}
          </div>
        </div>
        </div>
      </div>
        </ProfileSidebarLayout>
    )
}

export default UserAchievementPage