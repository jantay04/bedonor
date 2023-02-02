import React from "react";

//!SVG IMPORTS
import BeDonorSvg from "./assets/Be DonorBeDonor.svg";
import TelegramSvg from "./assets/VectorTelega.svg";
import InstagramSvg from "./assets/Instagram.svg";
import VkSvg from "./assets/LogoVk.svg";
// import InfoSvg from "./assets/Info.svg";
import { Link } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  const SocialMediaLinks = [
    {
      id: 1,
      title: "Telegram",
      url: "",
      svg: TelegramSvg,
    },
    {
      id: 2,
      title: "Instagram",
      url: "",
      svg: InstagramSvg,
    },
    {
      id: 3,
      title: "Vk",
      url: "",
      svg: VkSvg,
    },
  ];

  return (
    <div className="bg-[#D1E5F2] text-footerBlueText pt-[55px] pb-[32px]">
      <div className="container mx-auto p-4">
        <div className="flex max-md:flex-col text-center md:text-start  justify-between max-md:items-center">
          <div>
            <Link to="/">
              <img src={BeDonorSvg} />
            </Link>
            <div className="flex gap-5 mt-5">
              {SocialMediaLinks &&
                SocialMediaLinks.map(link => (
                  <>
                    <Link to={link.url}>
                      <img src={link.svg} alt={link.title} />
                    </Link>
                  </>
                ))}
            </div>
            <p className="mt-10">© 2022 BeDonor</p>
          </div>
          <div>
            {/*----- Вместо p потом Link будет -----*/}
            <h2 className=" text-base font-bold">Навигация по сайту</h2>
            <ul className="flex flex-col gap-4 mt-6">
              <Link to="/">
                <li>О нас</li>
              </Link>
              <Link to="/">
                <li>Новости</li>
              </Link>
              <Link to="/">
                <li>Вопросы</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className=" text-base font-bold">Контакты</h2>
            <ul className="flex flex-col gap-4 mt-6">
              <li>+996 (990) 885 885</li>
              <li>bedonor@gmail.com</li>
              <li>Адрес: ул.Исанова 102</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
