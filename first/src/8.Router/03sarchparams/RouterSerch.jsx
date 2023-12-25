import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Data from "./Data";

export default function RouterSerch() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Data} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
