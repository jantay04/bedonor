import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import picture from "../QuestionsPage/assets/picture.svg";
import minus from "./assets/minus.svg";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

type Props = {};

const QuestionsPage = (props: Props) => {
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
              <p className="stext-[rgba(42, 85, 115, 0.5)] font-medium text-2xl">
                FAQ
              </p>
            </Link>
          </Breadcrumbs>
        </div>
        <h3 className="text-[34px] py-3 my-5 font-bold text-[#2A5573]">
          ВОПРОСЫ
        </h3>
        <div className="container mx-auto py-5 mt-5 grid grid-cols-12 gap-[20px] max-sm:gap-[10px text-[#2A5573]">
          <div className="col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center pt-[40px]">
            <img src={picture} alt="" />
          </div>
          <div className="col-span-7 max-lg:col-span-12">
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex flex-row justify-between">
                  <h4>Кто такой донор?</h4>
                  <img src={minus} alt="" />
                </div>
                <p>
                  Но базовые сценарии поведения пользователей неоднозначны и
                  будут преданы социально-демократической анафеме.
                  Противоположная точка зрения подразумевает, что активно.
                </p>
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <h4>Как я могу стать донором?</h4>
                  <img src={minus} alt="" />
                </div>
                <p>
                  Но базовые сценарии поведения пользователей неоднозначны и
                  будут преданы социально-демократической анафеме.
                  Противоположная точка зрения подразумевает, что активно.
                </p>
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <h4>Где я могу сдать свою кровь?</h4>
                  <img src={minus} alt="" />
                </div>
                <p>
                  Но базовые сценарии поведения пользователей неоднозначны и
                  будут преданы социально-демократической анафеме.
                  Противоположная точка зрения подразумевает, что активно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default QuestionsPage;
