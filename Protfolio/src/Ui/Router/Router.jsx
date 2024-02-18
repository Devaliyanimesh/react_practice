import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import './Router.css';
import Header from '../Coponents/Header';
import About from '../Page/About';
import Services from '../Page/Services';
import Project from '../Page/Project';
import Contact from '../Page/Contact';

export default function Router() {
    return (
        <BrowserRouter>
            <div className="flex-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Services />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
