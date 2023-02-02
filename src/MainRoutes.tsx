import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthPage from "./pages/HealthPage";
import NewsPage from "./pages/NewsPage";
import NewsOnePage from "./pages/NewsOnePage";
import UserProfilePage from "./pages/UserProfilePages/Profile";
import UserAchievementPage from "./pages/UserProfilePages/Achievement";
import UserServicesPage from "./pages/UserProfilePages/Services";
import UserHistoryPage from "./pages/UserProfilePages/History";
import UserExitPage from "./pages/UserProfilePages/Exit";
import UserSettingsPage from "./pages/UserProfilePages/Settings";
import LogAndRegPage from "./pages/LogAndRegPage";
import AdminPanelDonorPage from "./pages/AdminPanelPages/Donor";
import AdminCoinsDonorPage from "./pages/AdminPanelPages/Coins";

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
      link: "/news",
      element: <NewsPage/>,
      id: 4,
    },
    {
      link: "/newspage/:id",
      element: <NewsOnePage/>,
      id: 5,
    },
    {
      link: "/profile",
      element: <UserProfilePage/>,
      id: 6,
    },
    {
      link: "/profile/achievement",
      element: <UserAchievementPage/>,
      id: 7,
    },
    {
      link: "/profile/services",
      element: <UserServicesPage/>,
      id: 8,
    },
    {
      link: "/profile/history",
      element: <UserHistoryPage/>,
      id: 9,
    },
    {
      link: "/profile/settings",
      element: <UserSettingsPage/>,
      id: 10,
    },
    {
      link: "/profile/exit",
      element: <UserExitPage/>,
      id: 11,
    },
    {
      link: "/auth",
      element: <LogAndRegPage />,
      id: 12,
    },
    {
      link: "/admin",
      element: <AdminPanelDonorPage />,
      id: 13,
    },
    {
      link: "/admin/coins",
      element: <AdminCoinsDonorPage/>,
      id: 14,
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
