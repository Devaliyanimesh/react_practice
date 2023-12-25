import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";

export default function RouterSerch() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Form} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
