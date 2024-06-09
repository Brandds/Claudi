import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Telaincial from "./pages/telaincial";
import Telaprincipal from "./pages/telaprincipal";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Telaincial></Telaincial>}></Route>
        <Route
          path="/telaprincipal"
          element={<Telaprincipal></Telaprincipal>}
        ></Route>
        <Route path="" element=""></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
