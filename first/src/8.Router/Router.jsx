import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Errropage from "./Errropage";
import Header from "./Header";
import Bike from "./Contack/Bike";
import Car from "./Contack/Car";
import SportBike from "./Contack/MOdal/SportBike";
import Normal from "./Contack/MOdal/Normal";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route  path="/contact" >
          <Route index Component={Contact} />
          <Route path="bike" >
          <Route index Component={Bike}/>
          <Route path="sportbike" Component={SportBike}/>
          <Route path="normalbike" Component={Normal}/>

          </Route>
          <Route path="/contact/Car" Component={Car}/>

         </Route>

          {/* 1st method */}
          { /* <Route path="/contact" element={<Contact />} />
          <Route path="/contact/bike" Component={Bike}/>
          <Route path="/contact/car" Component={Car}/> */}
          <Route path="*" element={<Errropage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
