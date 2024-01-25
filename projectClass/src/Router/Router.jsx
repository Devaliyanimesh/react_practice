import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Fotter from "../UI/Components/Fotter/Fotter";
import Kids from "../UI/Pages/Product/Kids";
import Men from "../UI/Pages/Product/Men";
import Woman from "../UI/Pages/Product/Woman";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/men" element={<Men />} />
      </Routes>
      <Routes>
        <Route path="/woman" element={<Woman />} />
      </Routes>
      <Routes>
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}
