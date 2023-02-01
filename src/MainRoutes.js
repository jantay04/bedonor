import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogAndRegPage from "./pages/LogAndRegPage";
import QuestionsPage from "./pages/QuestionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthPage from "./pages/HealthPage";
import NewsPage from "./pages/NewsPage";
import NewsOnePage from "./pages/NewsOnePage";
import UserProfilePage from "./pages/UserProfilePage/Profile";
import UserAchievementPage from "./pages/UserProfilePage/Achievement";
import UserServicesPage from "./pages/UserProfilePage/Services";
import UserHistoryPage from "./pages/UserProfilePage/History";
import UserExitPage from "./pages/UserProfilePage/Exit";
import UserSettingsPage from "./pages/UserProfilePage/Settings";
import AdminPage from "./pages/AdminPage/index";
import DonorPage from "./pages/AdminPage/navigations/DonorPage/index";
import CoinsPage from "./pages/AdminPage/navigations/CoinsPage/index";
import BloodPage from "./pages/AdminPage/navigations/BloodPage/index";
import WhereLocation from "./pages/WhereLocation";
import Achivments from "./pages/Achivments";

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
      link: "/health",
      element: <HealthPage />,
      id: 3,
    },
    {
      link: "/news",
      element: <NewsPage />,
      id: 4,
    },
    {
      link: "/newspage/:id",
      element: <NewsOnePage />,
      id: 5,
    },
    {
      link: "/profile",
      element: <UserProfilePage />,
      id: 6,
    },
    {
      link: "/profile/achievement",
      element: <UserAchievementPage />,
      id: 7,
    },
    {
      link: "/profile/services",
      element: <UserServicesPage />,
      id: 8,
    },
    {
      link: "/profile/history",
      element: <UserHistoryPage />,
      id: 9,
    },
    {
      link: "/profile/settings",
      element: <UserSettingsPage />,
      id: 10,
    },
    {
      link: "/profile/exit",
      element: <UserExitPage />,
      id: 11,
    },
    {
      link: "/auth",
      element: <LogAndRegPage />,
      id: 12,
    },
    {
      link: "/questions",
      element: <QuestionsPage />,
      id: 13,
    },
    {
      link: "/admin",
      element: <AdminPage />,
    },
    {
      link: "/donorsadmin",
      element: <DonorPage />,
    },
    {
      link: "/coinsadmin",
      element: <CoinsPage />,
    },
    {
      link: "/bloodadmin",
      element: <BloodPage />,
    },
    {
      link: "/location",
      element: <WhereLocation />,
    },
    {
      link: "/achive",
      element: <Achivments />,
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
