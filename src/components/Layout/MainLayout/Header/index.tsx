import React, { useState } from "react";
import logoSvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton/IconButton";

type Props = {};

function Header({}: Props) {
  const linksLists = [
    {
      id: 1,
      tittle: "Главная",
      url: "/",
    },
    {
      id: 2,
      tittle: "Достижения",
      url: "/achive",
    },
    {
      id: 3,
      tittle: "Где сдать кровь?",
      url: "/location",
    },
    {
      id: 4,
      tittle: "Новости",
      url: "/news",
    },
    {
      id: 5,
      tittle: "FAQ",
      url: "/questions",
    },
    {
      id: 6,
      tittle: "О нас",
      url: "/aboutus",
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="container mx-auto p-4 mt-6 flex flex-row items-center justify-between">
      <Link to={"/"}>
        <img src={logoSvg} alt="logo" className=" cursor-pointer" />
      </Link>
      <ul className="flex items-center justify-between max-lg:hidden gap-[48px] text-ourblue ">
        {linksLists &&
          linksLists.map(item => (
            <li className="hover:text-ourred transition-all">
              <Link to={item.url}>{item.tittle}</Link>
            </li>
          ))}
        <li>
          <Link to="/auth">
            <p className="flex justify-center items-center hover:bg-ourred hover:text-[#ffffff] transition-all  py-3 px-10 text-ourred font-semibold rounded-2xl   outline outline-offset-0 outline-ourred">
              Войти
            </p>
          </Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setOpenHamburger(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <Hamburger
        linksLists={linksLists}
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
      />
    </div>
  );
}

export default Header;
