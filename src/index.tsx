import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/main.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Hooks/Store";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
