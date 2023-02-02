import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  img: any;
};

function NewsCard({ id, title, description, createdDate, img }: Props) {
  return (
    <>
      <div>
        <Link to={`/newspage/${id}`}>
          <div className="bg-[#EBEDEE] rounded-lg overflow-hidden w-[100%]">
            <div className="">
              <img src={img} alt="NewsImg" className=" w-[100%] h-[200px] " />
            </div>
            <div className="p-4 grid gap-2">
              <p className="text-[#2A5573]/50">
                {createdDate ? createdDate.split("T")[0] : "Загрузка..."}
              </p>
              <h3 className="text-[#2A5573] font-bold text-lg">{title}</h3>
              <p className="text-[#2A5573]/50 ">{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NewsCard;
