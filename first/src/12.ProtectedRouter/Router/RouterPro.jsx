import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../ui/Pages/About'
import Home from '../ui/Pages/Home'
import Header from '../ui/Components/Header/Header'
import Footer from '../ui/Components/Footer/Footer'
import ProtectedRouter from './ProtectedRouter'
import Profile from '../ui/Pages/Profile'
import Admin from '../ui/Pages/Admin'

export default function RouterPro() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<ProtectedRouter Component={<Admin/>} />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}