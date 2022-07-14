import React from "react";
import Router from "./Routes/router"
import Navbar from "./componentes/Navbar";
import GlobalState from "./componentes/Global/GlobalState";

const App = () => {
  return (
    <>
      <Navbar />
      <GlobalState>
      <Router/>
      </GlobalState>
    </>
  );
};

export default App;
