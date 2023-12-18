import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Errropage from "./Errropage";
import Header from "./Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Errropage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
