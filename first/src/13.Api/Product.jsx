import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Product() {
  const data=useLocation()
  console.log("Product  data", data)
  return (
   <>
   <h1>teettsthg</h1>
   </>
  )
}
