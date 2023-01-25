import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Footer from "./components/Layout/MainLayout/Footer";
import BaseMap from "./components/Layout/MainLayout/Map/BaseMap";

function App() {
  //Map пока как комонент идет , потом в main добавил, это для удобста:)
  return (
    <div className="App">
      <MainLayout>
        <BaseMap />
      </MainLayout>
    </div>
  );
}

export default App;
