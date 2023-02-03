import React from "react";
import MainLayout from "../components/Layout/MainLayout";
// import Map from "../components/Layout/MainLayout/KgMapPart/Map";
import MainSections from "../components/MainSections";
import BaseMap from "../components/LocMap/BaseMap";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <MainSections />
      <BaseMap />
    </MainLayout>
  );
};

export default HomePage;
