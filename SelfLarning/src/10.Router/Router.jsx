import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './MainPage'
import SecondPage from './SecondPage'

export default function Router() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/second' element={<SecondPage/>}/>
    

</Routes>
</BrowserRouter>
</>
  )
}
