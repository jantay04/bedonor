import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

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
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
