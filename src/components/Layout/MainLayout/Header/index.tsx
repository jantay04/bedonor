import React from "react";
import logosvg from "./assets/logo.svg";
import { useNavigate } from "react-router";

type Props = {};

function Header({}: Props) {
  let navigate = useNavigate();
  return (
    <div className="container max-w-7xl mx-auto p-4 pt-6 flex flex-row items-center justify-between">
      <img src={logosvg} alt="" className="w-logo cursor-pointer" />
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

export default Header;
