import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Fotter from "../UI/Components/Fotter/Fotter";
import Cart from "../UI/Pages/Cart/Cart";

export default function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
      <Fotter/>
    </BrowserRouter>
  );
}
