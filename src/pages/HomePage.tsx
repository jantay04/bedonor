import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import MainSections from "../components/Layout/MainSections";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <MainSections/>
    </MainLayout>
  );
};

export default HomePage;
