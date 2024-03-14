import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import LoginModal from "../UI/Pages/Login/LoginModal";
import { Provider } from "react-redux";
import store from './../Reduxx/Store/Store'
import Dashboard from "../UI/Pages/AdminPage/Dashboard/Dashboard";
import Order from "../UI/Pages/AdminPage/Order/Order";
import Product from "../UI/Pages/AdminPage/Product/Product";
import User from "../UI/Pages/AdminPage/User/User";
import House from "../UI/Pages/CommanPage/House & Home/House";
import Women from "../UI/Pages/CommanPage/Women/Women";
import Men from "../UI/Pages/CommanPage/Men/Men";
import Jwellery from "../UI/Pages/CommanPage/Jwellery/Jwellery";
import GiftShop from "../UI/Pages/CommanPage/TheGiftShop/GiftShop";
import NerArrivel from "../UI/Pages/CommanPage/NewArrivel/NerArrivel";
import Profile from "../UI/Pages/CommanPage/Profile/Profile";
import { ProtectedRoute } from "./ProtectedRouter";

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>

        <Header />
        {/* Commnen pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<House />} />

          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/jwellery" element={<Jwellery />} />
          <Route path="/giftshop" element={<GiftShop />} />
          <Route path="/newArrivel" element={<NerArrivel />} />
          <Route path="/protectedRoute" element={<ProtectedRoute profile={<Profile />}/>} />


{/* ---------------------------------> */}
        </Routes>
        {/* Admin Pages */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </Provider>

      </BrowserRouter>
    </>
  );
}
