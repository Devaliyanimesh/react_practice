import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiGet() {
    let[data,setData]=useState([])

    useEffect(()=>{
        let fetch = async ()=>{
            try {
                const rest = await axios.get("https://fakestoreapi.com/products")
                setData(rest.data)
                
            } catch (error) {
                console.log("--------->",error);
            }
        }
        fetch()
    },[])
  return (
   <>
   hi
   </>
  )
}


