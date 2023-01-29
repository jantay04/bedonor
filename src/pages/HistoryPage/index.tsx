import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { Button } from "@mui/material";

type Props = {};
const HistoryPage = (props: Props) => {
  const personalHistoryList = [
    {
      id: 1,
      address: "г.Бишкек, ул. Исанова 102",
      date: "01/01/2023",
      amount: 2,
      achivement: 300,
    },
    {
      id: 2,
      address: "г.Бишкек, ул. Исанова 102",
      date: "01/01/2023",
      amount: 0.5,
      achivement: 100,
    },
    {
      id: 3,
      address: "г.Бишкек, ул. Исанова 102",
      date: "01/01/2023",
      amount: 1,
      achivement: 200,
    },
    {
      id: 4,
      address: "г.Бишкек, ул. Исанова 102",
      date: "01/01/2023",
      amount: 0.5,
      achivement: 100,
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto max-sm:flex-col justify-center items-center">
        <h5 className="mx-auto my-10 text-[#2A5573] sm:my-2">Ваша история</h5>
        <div className="">
            <div className="grid grid-cols-4 text-center text-[#2A5573]">
              <p className="bg-[#D1E5F2] rounded-lg p-3 mx-3">Дата</p>
              <p className="bg-[#D1E5F2] rounded-lg p-3 mx-3">Место</p>
              <p className="bg-[#D1E5F2] rounded-lg p-3 mx-3">Обьем</p>
              <p className="bg-[#D1E5F2] rounded-lg p-3 mx-3">Достижение</p>
            </div>
            {personalHistoryList &&
              personalHistoryList.map((item) => (
                <div className="grid grid-cols-4 text-center text-[#2A5573]">
                  <p className="p-5 mx-3">{item.date}</p>
                  <p className="p-5 mx-3">{item.address}</p>
                  <p className="p-5 mx-3">{item.amount}</p>
                  <p className="p-5 mx-3">{item.achivement}</p>
                </div>
              ))}
          </div>
          <div className="container mx-auto pt-8 text-center items-center my-10 text-[#2A5573]">
          <h5>Поздравляем!</h5>
          <p>У вас хорошие результаты! Желаете сделать еще пожертвование?</p>
          <Button variant="contained" color="secondary" size="large" sx={{ textTransform: "none", marginTop: '36px', borderRadius: '16px', fontSize: '16px', padding: '16px 40px' }}>Стать донором</Button>
          </div>
      </div>
    </MainLayout>
  );
};

export default HistoryPage;
