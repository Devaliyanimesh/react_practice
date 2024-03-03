import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import LoginModal from "../UI/Pages/Login/LoginModal";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginmodal" element={<LoginModal />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
