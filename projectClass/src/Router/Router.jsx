import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Fotter from "../UI/Components/Fotter/Fotter";
import Cart from "../UI/Pages/Cart/Cart";
import Kids from "../UI/Pages/Product/Kids";
import Crousal from "../UI/Pages/Home/Crousal";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}
