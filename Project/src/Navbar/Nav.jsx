import React from 'react'
import ImgUrl from '../assets/logo.svg'

import { MDBIcon } from 'mdb-react-ui-kit'
import { Button } from 'reactstrap'
import '../App.css'


export default function Nav() {
  return (
    <>
      <div className='d-flex gap-5 align-items-center p-3 bg-black'>
        <div className="Logo col-1" color='danger ' style={{ marginRight: "20px" }}>
          <img src={ImgUrl} alt="" />
        </div>

        <button className='d-flex align-items-center col-5 rounded-5 border-0 overflow-hidden' >
          <i class="bi bi-search" style={{ backgroundColor: "transparent", color: "gray", fontSize: "20px" }} ></i>
          <input type="sarch" className=' border-0 rounded-5  col-12 py-1' style={{ backgroundColor: 'whitesmoke' }} placeholder='Search for products,Brands and More' />
        </button>

        <div className="Login d-flex align-items-center ">
          <Button className='bg-white' style={{ padding: "8px 10px" }}>
            <i class="bi bi-person-circle" color='black' style={{ fontSize: "18px", color: "black"}}></i>
            <span style={{ marginLeft: "10px", fontSize: "15px" }}>User</span>
          </Button>
        </div>
        <div className="Login d-flex align-items-center ">
          <Button className='bg-white' style={{ padding: "8px 10px" }} >
            <i class="bi bi-cart" color='black' style={{ fontSize: "18px", color: "black"}}></i>
            <span style={{ marginLeft: "5px", fontSize: "15px", }}>Cart</span>
          </Button>
        </div>
        <div className="Login d-flex align-items-center ">
          <Button className='bg-white' style={{ padding: "8px 10px" }} >


            <span class="bi bi-shop" color='black' style={{ fontSize: "18px", color: "black" }} ></span>
            <span style={{ marginLeft: "5px", fontSize: "15px", }}>Become a Seller</span>
          </Button>
        </div>
        <div className="Login d-flex align-items-center ">
<span style={{fontSize:"25px"}} className='Rotate'>...</span>

        </div>
      </div>


    </>
  )
}
