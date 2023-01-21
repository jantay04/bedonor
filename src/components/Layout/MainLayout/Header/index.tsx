import React from "react";
import logosvg from "./assets/logo.svg";

type Props = {};

function Header({}: Props) {
  return (
    <div className="container max-w-7xl mx-auto pt-6 flex flex-row items-center justify-between">
      <img src={logosvg} alt="" className="w-logo cursor-pointer" />
      <div>
        <ul className="flex flex-row justify-between w-vsm text-ourblue ">
          <button className="cursor-pointer focus:text-ourred">Главная</button>
          <button className="cursor-pointer focus:text-ourred">
            Достижения
          </button>
          <button className="cursor-pointer focus:text-ourred">
            Где сдать кровь?
          </button>
          <button className="cursor-pointer focus:text-ourred">Новости</button>
          <button className="cursor-pointer focus:text-ourred">FAQ</button>
        </ul>
      </div>
      <button className="w-btn h-btn text-ourred font-semibold rounded-btn  outline outline-offset-0 outline-ourred">
        Войти
      </button>
    </div>
  );
}

export default Header;
