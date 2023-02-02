import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthPage from "./pages/HealthPage";
import NewsOnePage from "./pages/NewsOnePage";
import LogAndRegPage from "./pages/LogAndRegPage";
import AdminPanelDonorPage from "./pages/AdminPanelPages/Donor";
import AdminCoinsDonorPage from "./pages/AdminPanelPages/Coins";
import WhereLocation from "./pages/WhereLocation";
import Achivments from "./pages/Achivments";
import UserExitPage from "./pages/UserProfilePages/Exit";
import UserSettingsPage from "./pages/UserProfilePages/Settings";
import UserHistoryPage from "./pages/UserProfilePages/History";
import UserServicesPage from "./pages/UserProfilePages/Services";
import UserAchievementPage from "./pages/UserProfilePages/Achievement";
import UserProfilePage from "./pages/UserProfilePages/Profile";
import NewsPage from "./pages/NewsPage";
import AdminBloodPage from "./pages/AdminPanelPages/Blood";

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
      element: <HealthPage />,
      id: 4,
    },
    {
      link: "/news",
      element: <NewsPage />,
      id: 5,
    },
    {
      link: "/newspage/:id",
      element: <NewsOnePage />,
      id: 6,
    },
    {
      link: "/profile",
      element: <UserProfilePage />,
      id: 7,
    },
    {
      link: "/profile/achievement",
      element: <UserAchievementPage />,
      id: 8,
    },
    {
      link: "/profile/services",
      element: <UserServicesPage />,
      id: 9,
    },
    {
      link: "/profile/history",
      element: <UserHistoryPage />,
      id: 10,
    },
    {
      link: "/profile/settings",
      element: <UserSettingsPage />,
      id: 11,
    },
    {
      link: "/profile/exit",
      element: <UserExitPage />,
      id: 12,
    },
    {
      link: "/auth",
      element: <LogAndRegPage />,
      id: 13,
    },
    {
      link: "/admin",
      element: <AdminPanelDonorPage />,
      id: 14,
    },
    {
      link: "/admin/coins",
      element: <AdminCoinsDonorPage />,
      id: 15,

    },
    {
      link: "/admin/blood",
      element: <AdminBloodPage />,
      id: 20
    },
    {
      link: "/questions",
      element: <QuestionsPage />,
      id: 16,
    },
    {
      link: "/location",
      element: <WhereLocation />,
      id: 21
    },
    {
      link: "/achive",
      element: <Achivments />,
      id: 22
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
