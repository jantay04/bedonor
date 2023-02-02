import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import React from "react";
import pic1 from "./assets/pic1.svg";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import progressSvg from "./assets/progress.svg";
import progress1 from "./assets/progress1.svg";
import progress2 from "./assets/progress2.svg";
import progress3 from "./assets/progress3.svg";
import progress4 from "./assets/progress4.svg";
import progress5 from "./assets/progress5.svg";
import progress6 from "./assets/progress6.svg";
import progress7 from "./assets/progress7.svg";
import progress8 from "./assets/progress8.svg";
import stepSvg from "./assets/stepSection.svg";
import BaseMap from "../Layout/MainLayout/Map/BaseMap";

type Props = {};

type QualityItemProps = {
  title: string;
  description: string;
  icon: any;
};

function MainSections({}: Props) {
  const QualityItem = ({ icon, title, description }: QualityItemProps) => {
    return (
      <div className="bg-[#D1E5F2] p-6 rounded-[16px] flex flex-col max-sm:items-center max-sm:text-center">
        <div>
          <img className="" src={icon} alt="icon" />
        </div>
        <h3 className=" text-xl font-black text-[#2A5573] mt-4">{title}</h3>
        <p className="text-[#2A5573] mt-2">{description}</p>
      </div>
    );
  };

  const qualities = [
    {
      id: 1,
      title: "Привелегии",
      description:
        "Зарабатывайте очки и привелегии. Сдав кровь получайте достижения и бонуса",
      icon: icon1,
    },
    {
      id: 2,
      title: "Универсальность",
      description: "Получайте доступ ко всей информации в одном месте",
      icon: icon2,
    },
    {
      id: 3,
      title: "Удобство",
      description:
        "Зарабатывайте очки и привелегии. Сдав кровь получайте достижения и бонуса",
      icon: icon3,
    },
  ];

  const progresses = [
    {
      id: 1,
      title: "Новичок",
      icon: progress1,
    },
    {
      id: 2,
      title: "Спасатель",
      icon: progress2,
    },
    {
      id: 3,
      title: "Герой",
      icon: progress3,
    },
    {
      id: 4,
      title: "Супер герой",
      icon: progress4,
    },
    {
      id: 5,
      title: "Идеальная кровь",
      icon: progress5,
    },
    {
      id: 6,
      title: "Снова в строю",
      icon: progress6,
    },
    {
      id: 7,
      title: "Путешественник",
      icon: progress7,
    },
    {
      id: 8,
      title: "Активный",
      icon: progress8,
    },
  ];

  const stepList = [
    {
      id: 1,
      title: "Найди мед центр для сдачи крови",
    },
    {
      id: 2,
      title: "Проверься и сдай кровь",
    },
    {
      id: 3,
      title: "Забери свои призы и достижения",
    },
  ];

  return (
    <div className=" my-[200px]">
      {/* Main section */}
      <div className="container mx-auto p-4 grid grid-cols-12 gap-[20px] max-sm:gap-[10px] ">
        <div className="col-span-7 max-lg:col-span-12 ">
          <h1 className="text-[#2A5573] text-5xl font-bold max-md:text-4xl max-[520px]:text-2xl">
            Спасай жизни, становясь донором крови
          </h1>
          <p className="hover:text-red-700 text-[#2A5573] text-lg  mt-9 font-medium">
            Каждый день множество людей в Кыргызстане нуждаются в крови или ее
            компонентах для лечения или операций. Вы можете быть тем, кто спасет
            их жизнь. Присоединяйтесь к нам сегодня!
          </p>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              textTransform: "none",
              marginTop: "36px",
              borderRadius: "16px",
              fontSize: "16px",
              padding: "16px 40px",
            }}>
            Стать донором
          </Button>
        </div>
        <div className="col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center pt-[40px]">
          <img src={pic1} className="w-full" alt="graphic" />
        </div>
      </div>

      {/* Quality section */}
      <div className="container mx-auto p-4 grid md:grid-cols-3 gap-5 my-[120px]">
        {qualities &&
          qualities.map(item => (
            <QualityItem
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
      </div>

      {/* Quality section */}
      <div className="container mx-auto p-4 flex max-md:flex-col justify-center items-center gap-12">
        <div>
          <img src={progressSvg} alt="progressSvg" />
        </div>
        <div className="md:max-w-[500px] max-md:text-center">
          <h2 className="text-[#2A5573] text-2xl font-bold">Достижения</h2>
          <p className="text-[#2A5573] text-base  mt-6">
            Получайте достижения и поощрительные призы в свою коллекцию при
            каждой сдаче крови. Чем больше крови вы сдаете, тем выше у вас
            статус донора
          </p>
        </div>
      </div>
      {/* Progress section  */}
      <div className="bg-[#D1E5F2]  my-[120px]">
        <div className="container mx-auto p-4 grid min-[320px]:grid-cols-2 min-[460px]:grid-cols-3 sm:grid-cols-4 py-[60px] gap-y-[60px]">
          {progresses &&
            progresses.map(item => (
              <div className="flex flex-col items-center">
                <div>
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="text-[#2A5573] mt-3 font-bold">{item.title}</p>
              </div>
            ))}
        </div>
      </div>
      {/* Progress section  */}

      <div className="container mx-auto p-4 my-[120px]">
        <h2 className="text-center text-[#2A5573] text-2xl">
          Получить приз очень легко, нужно сделать всего лишь 3 шага:
        </h2>
        <div className="flex max-lg:flex-col  mt-[50px] lg:mt-[100px] items-center justify-center">
          <div className="">
            <img className="h-[400px]" src={stepSvg} alt="svg" />
          </div>
          <div className="grid gap-[70px] relative max-lg:mt-[20px]">
            {stepList.map(item => (
              <div className="flex items-center">
                <div className="w-[42px] md:w-[64px] h-[42px] md:h-[64px] text-2xl border-[3px] bg-[#ffffff] border-[#AB3D51] text-[#2A5573] rounded-[100%] mr-[20px] flex items-center justify-center">
                  {item.id}
                </div>
                <div className="flex items-center">
                  <p className="text-[#2A5573] md:text-xl">{item.title}</p>
                </div>
              </div>
            ))}
            <div className="w-[3px] h-[100%] bg-[#AB3D51] absolute top-0 left-[20px] md:left-[30px] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSections;
