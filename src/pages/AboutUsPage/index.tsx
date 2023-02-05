import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import sign from "../AboutUsPage/assets/chevron_right.svg";
import picture from "../AboutUsPage/assets/main_pic.svg";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <MainLayout>
      <div className="container mx-auto p-4 grid grid-cols-12 gap-[20px] max-sm:gap-[10px] text-[#2A5573]">
        <div className="col-span-7 max-lg:col-span-12">
          <div className="my-4">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="/">
              <p className="text-ourblue font-medium text-m">Главная</p>
            </Link>
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="">
              <p className="stext-[rgba(42, 85, 115, 0.5)] font-medium text-m">
                FAQ
              </p>
            </Link>
          </Breadcrumbs>
          </div>
          <h3 className="text-[34px] font-bold mb-8">О НАС</h3>
          <div className="flex flex-col space-y-4">
            <p>
              BeDonor - это платформа для доноров крови. Наш девиз "Спасай
              жизни, становясь донором крови!”
            </p>
            <p>
              Каждый день множество людей в Кыргызстане нуждаются в крови или ее
              компонентах для лечения или операций. Вы можете быть тем, кто
              спасет их жизнь! Пожертвование крови - простой и безопасный
              процесс, который занимает всего несколько минут вашего времени.
            </p>
            <p>
              Не задерживайте, запишитесь сейчас на донорство крови и помогите
              спасти жизни! На нашем сайте вы найдете много информации о
              донорстве и ближайшее место для пожертвования.
            </p>
            <p>Спасибо за то, что вы готовы помочь спасти жизни!</p>
          </div>
          <div className="flex flex-col space-y-4 mt-[100px]">
            <p className="font-bold">Контакты:</p>
            <p>+996 (990) 885 885</p>
            <p>bedonor@gmail.com</p>
            <p>Адрес:</p>
            <p>ул.Исанова 102</p>
          </div>
        </div>
        <div className="col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center pt-[40px]">
          <img src={picture} alt="picture" />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
