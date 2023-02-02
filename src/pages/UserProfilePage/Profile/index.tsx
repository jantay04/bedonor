import React, { FC, useEffect, useState } from "react";
import ProfileSidebarLayout from "../../../components/Layout/ProfileSidebarLayout";
import { TextField } from "@mui/material";

//Assets
import ProfilePhoto from "./Assets/Ellipse 1.png";
import { useAppSelecctor } from "../../../Hooks/Hook";
import { IUserInfo } from "../../../Types/Type";

const UserProfilePage: FC = () => {
  // const user: IUserInfo = useAppSelecctor(state => state.user.userInfo);

  const [userInfo, setUserInfo] = useState<IUserInfo>(
    JSON.parse(localStorage.getItem("userInfo") || "{}")
  );

  useEffect(() => {
    // setUserInfo(user);
  }, []);

  return (
    <ProfileSidebarLayout>
      {/* <div className=" justify-start w-full"></div> */}
      <div className=" h-80 flex justify-evenly  ">
        <p className="font-ourFont text-footerBlueText font-bold text-xl leading-7 -mt-7  ">
          Личная информация
        </p>
        <div className="flex justify-between  ml-7 ">
          <div className="max-w-min flex flex-col items-center justify-between mr-6 ">
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Имя"
              defaultValue={
                userInfo?.firstName ? userInfo.firstName : "Не указано"
              }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Группа крови"
              // defaultValue={
              //   userInfo?. ? userInfo. : "Не указано"
              // }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Дата рождения"
              // defaultValue={
              //   userInfo?. ? userInfo. : "Не указано"
              // }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Номер телефона"
              // defaultValue={
              //   userInfo?. ? userInfo. : "Не указано"
              // }
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="  max-w-min flex flex-col  items-center justify-between mr-6 ">
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Фамилия"
              defaultValue={
                userInfo?.lastName ? userInfo?.lastName : "Не указано"
              }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Пол"
              // defaultValue={
              //   userInfo?.firstName ? userInfo.firstName : "Не указано"
              // }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Регион"
              // defaultValue={
              //   userInfo?.firstName ? userInfo.firstName : "Не указано"
              // }
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Почта"
              defaultValue={userInfo?.email ? userInfo?.email : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="w-56  bg-ourBlue rounded-lg flex flex-col items-center justify-center">
            <div className="mb-10">
              <img
                src={userInfo.avatarUrl ? userInfo.avatarUrl : ProfilePhoto}
                className="w-28 h-28 rounded-3xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-ourFont text-footerBlueText font-bold text-l leading-7">
                {userInfo.lastName ? userInfo.lastName : "Не указано"}
                {userInfo.firstName ? userInfo.firstName : "Не указано"}
              </p>
              <p className="font-ourFont text-footerBlueText text-base leading-6 font-bold">
                600
              </p>
              <p className="font-ourFont text-footerBlueText text-base leading-6 font-medium">
                баллов
              </p>
              <p className="leading-7 text-footerBlueText text-base font-medium font-ourFont">
                О (I) Rh+
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProfileSidebarLayout>
  );
};

export default UserProfilePage;
