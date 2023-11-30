import React from 'react'
import Second from './Second/Second'
import Crousel from './Third/Crousel'
import Nav from './First/Nav'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'









function App() {


  return (
   <>
   <Nav/>
   <Second/>
  <Crousel/>
  
 


  
  <ToastContainer />
   </>
  )
}

export default App
