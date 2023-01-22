import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import Map from "../components/Layout/MainLayout/KgMapPart/Map";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <Map />
      <div>HomePage</div>
    </MainLayout>
  );
};

export default HomePage;
