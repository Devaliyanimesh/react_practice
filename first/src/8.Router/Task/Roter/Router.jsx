import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "../Data";
import User from "../User";
import Age from "./Age";
import Fullinfo from "./Fullinfo";

export default function Routerr() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/age/:age" element={<Age />} />
        <Route path="/full/:name/:age" element={<Fullinfo />} />



      </Routes>
    </BrowserRouter>
  );
}
