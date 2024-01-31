import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Fotter from "../UI/Components/Fotter/Fotter";
import Kids from "../UI/Pages/Product/Kids";
import Men from "../UI/Pages/Product/Men";
import Woman from "../UI/Pages/Product/Woman";
import SingleProduct from "../UI/Pages/SingleProduct/SingleProduct";
import Payment from "../UI/Pages/Payment/Payment";
import {MenProted} from "./ProtectedRouter";
import Loginn from "../UI/Pages/Login/Loginn";
import RegisterPage from "../UI/Pages/Register/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/men" element={<MenProted Component={<Men/>} />} />
      </Routes>
      <Routes>
        <Route path="/woman" element={<MenProted WomanComponent={<Woman/>} />} />
        
      </Routes>
      <Routes>
        <Route path="/kids"  element={<MenProted kidsComponent={<Kids/>} />} />
      </Routes>
      <Routes>
      <Route path="/singlePage" element={<SingleProduct/>}/>
      </Routes>
      <Routes>
        <Route path="/payment" Component={Payment}/> 
      </Routes>
      
      <Routes>
        <Route path="/login" Component={Loginn}/>
      </Routes>
      <Routes>
        <Route path="/register" Component={RegisterPage}/>
      </Routes>
      <Fotter/>
    </BrowserRouter>
  );
}
