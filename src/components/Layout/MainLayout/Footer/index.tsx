import React from "react";

//!SVG IMPORTS
import BeDonorSvg from "./assets/Be DonorBeDonor.svg";
import TelegaSvg from "./assets/VectorTelega.svg";
import InstaSvg from "./assets/Instagram.svg";
import VkSvg from "./assets/LogoVk.svg";
import InfoSvg from "./assets/Info.svg";
import { Link, NavLink } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-ourBlue flex  font-ourFont min-w-max h-footerHeight text-footerBlueText  leading-8 text-l font-semibold not-italic">
      <div className="flex w-10/12  min-w-max justify-between ml-24 mt-14">
        <div>
          <img src={BeDonorSvg} />
          <div className="flex">
            <img src={TelegaSvg} />
            <img className="m-5" src={InstaSvg} />
            <img src={VkSvg} />
          </div>
          <img src={InfoSvg} />
        </div>
        <div>
          {/*----- Вместо p потом Link будет -----*/}
          <p>О нас</p>
          <p>Новости</p>
          <p>Вопросы</p>
        </div>
        <div>
          <p>Адрес:</p>
          <p>ул.Исанова 102</p>
        </div>
        <div>
          <p>Контакты:</p>
          <p className="">+996 (990) 885 885</p>
          <p>bedonor@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
