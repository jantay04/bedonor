import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import QuestionsPage from "./pages/QuestionsPage";
import HealthPage from "./pages/HealthPage";
import HistoryPage from "./pages/HistoryPage";
import AchivementsPage from "./pages/AchivementsPage";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#C53A3F",
      contrastText: "#fff",
    },
  },
});

function App() {
  //Map пока как комонент идет , потом в main добавил, это для удобста:)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/questions" element={<QuestionsPage/>} />
          <Route path="/health" element={<HealthPage/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/achivements" element={<AchivementsPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

