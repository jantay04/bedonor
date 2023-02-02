import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import MainSections from "../../components/MainSections";
import BaseMap from "../../components/LocMap/BaseMap";
// import Map from "../../components/KgMapPart/Map";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <MainLayout>
        <MainSections />
        <BaseMap />
      </MainLayout>
    </>
  );
};

export default HomePage;
