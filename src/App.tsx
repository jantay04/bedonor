import React from "react";
// import MainLayout from "./components/Layout/MainLayout";
// import Footer from "./components/Layout/MainLayout/Footer";
// import BaseMap from "./components/Layout/MainLayout/Map/BaseMap";
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
