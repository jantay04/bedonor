import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthPage from "./pages/HealthPage";
import HistoryPage from "./pages/HistoryPage";
import AchivementsPage from "./pages/AchivementsPage";

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
      id: 4,
    },
    {
      link: "/history",
      element: <HistoryPage/>,
      id: 5,
    },
    {
      link: "/achivements",
      element: <AchivementsPage/>,
      id: 6,
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
