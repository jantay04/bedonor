import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainRoutes from "./MainRoutes";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#C53A3F",
      contrastText: "#fff",
    },
    primary: {
      main: "rgb(42, 85, 115,50%)",
      contrastText: "#fff",
    },
  },
});

function App() {
  //Map пока как комонент идет , потом в main добавил, это для удобста:)
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
