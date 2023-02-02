import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import DonorImg from "./assets/donor1.jpg";
import NewsCard from "../../components/NewsCard";
import TelegramSvg from "./assets/telegram.svg";
import VkSvg from "./assets/vk.svg";
import InstagramSvg from "./assets/instagram.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../api";

type Props = {};

export type News = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  text: string;
  createdDate: string;
};

function NewsOnePage({}: Props) {
  const params = useParams();
  const [news, setNews] = useState<News | null>();

  useEffect(() => {
    axios.get(`${apiUrl}/news/${params}`).then(resp => {
      const content = resp.data;
      setNews(content);
    });
  }, [setNews]);

  const [newsLists, setNewsLists] = useState<News[] | null>();

  const [totalNews, setTotalNews] = useState<number | 0>(0);

  // const apiUrl = "https://jsonplaceholder.typicode.com/photos"
  const [news1, setNews1] = useState<News | null>();
  const [news2, setNews2] = useState<News | null>();

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${apiUrl}/news`).then(resp => {
      const totalNews = resp.data.totalElements;
      const allData = resp.data;
      setData(allData);
      setTotalNews(totalNews);
    });

    axios.get(`${apiUrl}/news/3`).then(resp => {
      const content = resp.data;
      setNews1(content);
    });
    axios.get(`${apiUrl}/news/1`).then(resp => {
      const content = resp.data;
      setNews2(content);
    });
  }, []);

  // const randomIdNews = Math.floor(Math.random() * totalNews) + 1

  return (
    <MainLayout>
      <div className=" container mx-auto p-4">
        <h2 onClick={() => console.log()}>Читать новости</h2>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-7">
            <p className="text-[#9d9d9d] mt-12">
              {news ? news.createdDate.split("T")[0] : "Загрузка..."}
            </p>
            <h1 className="text-[#AB3D51] text-2xl sm:text-4xl font-bold mt-8">
              {news ? news.title : "Загрузка..."}
            </h1>
            <p className=" mt-5 text-[#2A5573] leading-7 text-base">
              {news ? news.text : "Загрузка..."}
            </p>
            <div className="mt-[64px]">
              <p className="text-[#2A5573]">
                Источник новости и фото: Национальный фонд развития
                здравоохранения КР
              </p>
              <div className="flex gap-16 mt-3">
                <p className="text-[#2A5573]">Поделиться:</p>
                <div className="flex items-center gap-4 ">
                  <a href="#">
                    <img className=" w-[32px]" src={TelegramSvg} alt="icon" />
                  </a>
                  <a href="#">
                    <img className=" w-[32px]" src={VkSvg} alt="icon" />
                  </a>
                  <a href="#">
                    <img className=" w-[32px]" src={InstagramSvg} alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end col-span-12 sm:col-span-5 gap-[50px]">
            {/* {news && [news1, news2, news3].map((item) =>
              <div className='sm:max-w-[400px]'>
                <NewsCard id={item.id} title={item.title} description={item.description} dateOfCreate={item.dateOfCreate} img={item.img} />
              </div>
            )} */}
            <div className="sm:max-w-[400px] grid gap-[50px]">
              {news1 && (
                <NewsCard
                  id={news1.id}
                  title={news1.title}
                  description={news1.description}
                  createdDate={news1.createdDate}
                  img={news1.imageUrl}
                />
              )}
              {news2 && (
                <NewsCard
                  id={news2.id}
                  title={news2.title}
                  description={news2.description}
                  createdDate={news2.createdDate}
                  img={news2.imageUrl}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsOnePage;
