import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthPage from "./pages/HealthPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/aboutus",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/questions",
      element: <QuestionsPage />,
      id: 3,
    },
    {
      link: "/health",
      element: <HealthPage/>,
      id: 3,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};
export default MainRoutes;
