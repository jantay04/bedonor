import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainRoutes from "./MainRoutes";

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
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;

