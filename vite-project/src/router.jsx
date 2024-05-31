import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Telaincial from "./pages/telaincial";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Telaincial></Telaincial>}></Route>
        <Route path="" element=""></Route>
        <Route path="" element=""></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
