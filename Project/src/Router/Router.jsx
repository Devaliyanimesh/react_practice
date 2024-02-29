import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../UI/Pages/Home/Home'
import Header from '../UI/Components/Header/Header'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
