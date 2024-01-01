import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Car from "./Car";
import Bike from "./Bike";
import Normal from "./Biketype/Normal";
import Sportbike from "./Biketype/Sportbike";
export default function RouterNormal() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          {/* normal
        <Route path='/bike' Component={Bike}/>
        <Route path='/car' Component={Car}/> */}

          {/* Neasted */}
          <Route path="/bike">
            <Route index Component={Bike} />
            <Route path="normal" element={<Normal />} />
            <Route path="sport" element={<Sportbike />} />

            <Route />
          </Route>
          <Route path="/car" Component={Car} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
