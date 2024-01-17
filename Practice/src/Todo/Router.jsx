import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import InputTodoIndex from './InputTodoIndex'

export default function Router() {
  return (
 <>
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<InputTodoIndex/>}/>
 </Routes>
 </BrowserRouter>
 </>
  )
}
