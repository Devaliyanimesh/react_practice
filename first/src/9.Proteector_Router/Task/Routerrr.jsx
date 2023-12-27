import { Home } from "lucide-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import Employe from "./Employe";
import User from "./User";
import Homee from "./Homee";
import Header from "./Header";
import { UserRouter } from "./ProtectedRoute";

export default function Routerrr() {
  return (
    <>
      <BrowserRouter>
      <Header/>
    <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
        <Routes>
     
          <Route path="/home" element={<Homee/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/Superadmin" element={<SuperAdmin />} />
          <Route path="/user" element={<UserRouter components={<User/>}  />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
