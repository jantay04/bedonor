import React, { FC, useState } from "react";
import ProfileSidebarLayout from "../../../components/Layout/ProfileSidebarLayout";
import { TextField } from "@mui/material";

//Assets
import ProfilePhoto from "./Assets/Ellipse 1.png";

const UserProfilePage: FC = () => {
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
              // defaultValue={name ? name : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Группа крови"
              // defaultValue={bloodGroup ? bloodGroup : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Дата рождения"
              // defaultValue={dateOfBirth ? dateOfBirth : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Номер телефона"
              // defaultValue={phone ? phone : "Не указано"}
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
              // defaultValue={surname ? surname : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Пол"
              // defaultValue={sex ? sex : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Регион"
              // defaultValue={region ? region : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className="w-56"
              id="outlined-read-only-input"
              label="Почта"
              // defaultValue={email ? email : "Не указано"}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="w-56  bg-ourBlue rounded-lg flex flex-col items-center justify-center">
            <div className="mb-10">
              <img src={ProfilePhoto} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-ourFont text-footerBlueText font-bold text-2xl leading-7">
                Марат Азатов
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
