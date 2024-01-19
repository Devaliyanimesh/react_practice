import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";
import Product from "./Product";

export default function RouterApi() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Api />} />
          <Route path="/product" Component={Product}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
