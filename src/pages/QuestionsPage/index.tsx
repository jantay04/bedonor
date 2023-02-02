import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import picture from "../QuestionsPage/assets/picture.svg";
import minus from "./assets/minus.svg";

type Props = {};

const QuestionsPage = (props: Props) => {
  return (
    <MainLayout> 
        <h3 className="text-[34px] mx-[160px] py-3 my-5 font-bold text-[#2A5573]">ВОПРОСЫ</h3>
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
                Но базовые сценарии поведения пользователей неоднозначны и будут
                преданы социально-демократической анафеме. Противоположная точка
                зрения подразумевает, что активно.
              </p>
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <h4>Как я могу стать донором?</h4>
                <img src={minus} alt="" />
              </div>
              <p>
                Но базовые сценарии поведения пользователей неоднозначны и будут
                преданы социально-демократической анафеме. Противоположная точка
                зрения подразумевает, что активно.
              </p>
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <h4>Где я могу сдать свою кровь?</h4>
                <img src={minus} alt="" />
              </div>
              <p>
                Но базовые сценарии поведения пользователей неоднозначны и будут
                преданы социально-демократической анафеме. Противоположная точка
                зрения подразумевает, что активно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default QuestionsPage;
