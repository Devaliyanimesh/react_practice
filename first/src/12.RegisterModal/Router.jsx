import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LocalData from './LocalData'
import RegisterModal from './RegisterModal'
import UserData from './UserData'


export default function Router() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route  path={"/local"} element={<LocalData/>}/>
    <Route path={"/"} element={<RegisterModal/>}/>
    <Route path={"/userdata"} element={<UserData/>}/>

    
  </Routes>
  </BrowserRouter>
  </>
  )
}
