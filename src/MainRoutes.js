import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

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
      id: 1,
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
