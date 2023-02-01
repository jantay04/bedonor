import React from "react";
import LoginAndRegister from "../../components/LoginAndRegister";
import MainLayout from "../../components/Layout/MainLayout";

type Props = {};

const LogAndRegPage = (props: Props) => {
  return (
    <div>
      <MainLayout>
        <LoginAndRegister />
      </MainLayout>
    </div>
  );
};

export default LogAndRegPage;
