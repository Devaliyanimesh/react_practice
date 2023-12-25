import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Data";
import Age from "./DataShow/Age";
import Name from "./DataShow/Name";

export default function Routeruseparams() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/name/:name" Component={Name} />
          <Route path="/age/:age" Component={Age} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
