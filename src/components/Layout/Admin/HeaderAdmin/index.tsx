import React, { useState } from "react";
import logoSvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "../../MainLayout/Header/Hamburger";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

const HeaderAdmin = (props: Props) => {
  const linksLists = [
    {
      id: 1,
      tittle: "Доноры",
      url: "/donorsadmin",
    },
    {
      id: 2,
      tittle: "Коины",
      url: "/coinsadmin",
    },
    {
      id: 3,
      tittle: "Сдача крови",
      url: "/bloodadmin",
    },
    {
      id: 4,
      tittle: "Редактирование",
      url: "/",
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="container mx-auto p-4 mt-6 flex flex-row items-center justify-center max-lg:justify-end">
      <ul className="flex items-center justify-between max-lg:hidden  gap-[48px] text-ourblue ">
        {linksLists &&
          linksLists.map((item) => (
            <li className="hover:text-ourred transition-all">
              <Link to={item.url}>{item.tittle}</Link>
            </li>
          ))}
        {/* <li>
          <Link to="/profile">
            <p className="flex justify-center items-center hover:bg-ourred hover:text-[#ffffff] transition-all  py-3 px-10 text-ourred font-semibold rounded-2xl   outline outline-offset-0 outline-ourred">
              Войти
            </p>
          </Link>
        </li> */}
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
};

export default HeaderAdmin;
