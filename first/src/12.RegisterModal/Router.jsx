import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LocalData from './LocalData'
import RegisterModal from './RegisterModal'


export default function Router() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route  path={"/local"} element={<LocalData/>}/>
    <Route path={"/"} element={<RegisterModal/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}
