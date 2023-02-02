import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import progressSvg from "../../components/MainSections/assets/progress.svg";
import progress1 from "../../components/MainSections/assets/progress1.svg";
import progress2 from "../../components/MainSections/assets/progress2.svg";
import progress3 from "../../components/MainSections/assets/progress3.svg";
import progress4 from "../../components/MainSections/assets/progress4.svg";
import progress5 from "../../components/MainSections/assets/progress5.svg";
import progress6 from "../../components/MainSections/assets/progress6.svg";
import progress7 from "../../components/MainSections/assets/progress7.svg";
import progress8 from "../../components/MainSections/assets/progress8.svg";

type Props = {};

const Achivments = (props: Props) => {
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
  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <div className="my-4">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="/">
              <p className="text-ourblue font-medium text-2xl">Главная</p>
            </Link>
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="">
              <p className="text-[rgba(42, 85, 115, 0.5)] font-medium text-2xl">
                Достижения
              </p>
            </Link>
          </Breadcrumbs>
        </div>
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
              progresses.map((item) => (
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
      </div>
    </MainLayout>
  );
};

export default Achivments;
