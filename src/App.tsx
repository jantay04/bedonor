import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import MainRoutes from "./MainRoutes";
import Map from "./components/Layout/MainLayout/KgMapPart/Map";
import Footer from "./components/Layout/MainLayout/Footer";

function App() {
  //Map пока как комонент идет , потом в main добавил, это для удобста:)
  return (
    <div className="App">
      <MainRoutes />
      <MainLayout>
        {/* <Footer /> */}
        <Map />
      </MainLayout>
    </div>
  );
}

export default App;
