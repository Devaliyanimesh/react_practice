import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RegisterPractice from './RegisterPractice'
import UserDataa from './UserDataa'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<RegisterPractice/>}/>
        <Route path={"/user"} element={<UserDataa/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
