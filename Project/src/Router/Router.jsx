import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import LoginModal from "../UI/Pages/Login/LoginModal";
import { Provider } from "react-redux";
import store from './../Reduxx/Store/Store'

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginmodal" element={<LoginModal />} />


        </Routes>
      </Provider>

      </BrowserRouter>
    </>
  );
}
