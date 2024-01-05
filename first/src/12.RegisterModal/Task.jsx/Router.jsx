import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RegisterPractice from './RegisterPractice'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<RegisterPractice/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
