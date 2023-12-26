import { Home } from "lucide-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import Employe from "./Employe";
import User from "./User";
import Homee from "./Homee";
import Header from "./Header";
import {ProtectedRoute, UserRouter } from "./ProtectedRoute";

export default function Routerrr() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<ProtectedRoute components={<Homee/>}/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/Superadmin" element={<SuperAdmin />} />
          <Route path="/user" element={<UserRouter components={<Homee/>} componentss={<Header/>} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
