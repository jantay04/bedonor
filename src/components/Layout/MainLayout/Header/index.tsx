import React, { useState } from "react";
import logoSvg from "../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton/IconButton";

type Props = {};

function Header({}: Props) {
  let navigate = useNavigate();
  return (
    <div className="container max-w-7xl mx-auto p-4 pt-6 flex flex-row items-center justify-between">
      <img src={logoSvg} alt="" className="w-logo cursor-pointer" />
      <div>
        <ul className="flex flex-row justify-between w-vsm text-ourblue ">
          <button className="hover:text-ourred focus:text-ourred">
            Главная
          </button>
          <button className="hover:text-ourred focus:text-ourred">
            Достижения
          </button>
          <button className="hover:text-ourred focus:text-ourred">
            Где сдать кровь?
          </button>
          <button className="hover:text-ourred focus:text-ourred">
            Новости
          </button>
          <button className="hover:text-ourred focus:text-ourred">FAQ</button>
        </ul>
      </div>
      <div className="drop-shadow-2xl">
        <button
          className="hover:animate-bounce  w-btn h-btn text-ourred font-semibold rounded-btn  outline outline-offset-0 outline-ourred"
          onClick={() => navigate("/auth")}>
          Войти
        </button>
      </div>
    </div>
  );
}
