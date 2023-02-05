import React from "react";
import BaseMap from "../../components/LocMap/BaseMap";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import MainLayout from "../../components/Layout/MainLayout";
type Props = {};

const WhereLocation = (props: Props) => {
  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <div className="my-4">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="/">
              <p className="text-ourblue font-medium text-m">Главная</p>
            </Link>
            <Link
              className="hover:underline underline-offset-1"
              color="inherit"
              to="">
              <p className="stext-[rgba(42, 85, 115, 0.5)] font-medium text-m">
                Где сдать кровь?
              </p>
            </Link>
          </Breadcrumbs>
        </div>
        <h3 className="text-[34px] py-3 my-5 font-bold text-[#2A5573]">
          Где сдать кровь?
        </h3>
        <BaseMap />
      </div>
    </MainLayout>
  );
};

export default WhereLocation;
