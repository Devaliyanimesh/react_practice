import React from 'react'
import ImgUrl from '../assets/logo.svg'

import { Button } from 'reactstrap'
import '../App.css'


export default function Nav() {
  return (
    <>
      <div className="row align-items-center " style={{backgroundColor:' rgb(255, 255, 255)'}}>
        <div className='d-flex gap-5 col-7 align-items-center p-3  '>
          <div className="Logo col-2" color='danger ' style={{ marginRight: "20px" }}>
            <img src={ImgUrl} alt="" />
          </div>
          <div className='col-10 '>
            <button className='d-flex align-items-center col-11 rounded-2 border-0 overflow-hidden ' style={{ backgroundColor: ' rgb(214, 229, 236)' }} >
              <i class="bi bi-search" style={{ backgroundColor: "transparent", color: "gray", fontSize: "20px" }} ></i>
              <input type="sarch" className=' border-0 rounded-5  col-12 py-1' style={{ backgroundColor: 'transparent' }} placeholder='Search for products,Brands and More' />
            </button>
          </div>
        </div>
        <div className='col-5 d-flex gap-5 align-items-center  ' >
          <div >
            <Button className='bg-white border-0 ' style={{ padding: "8px 10px" }}>
              <i class="bi bi-person-circle" color='black' style={{ fontSize: "18px", color: "black" }}></i>
              <span style={{ marginLeft: "10px", fontSize: "15px", color: 'black' }}>User</span>
            </Button>
          </div>
          <div >
            <Button className='bg-white border-0' style={{ padding: "8px 10px" }} >
              <i class="bi bi-cart" color='black' style={{ fontSize: "18px", color: "black" }}></i>
              <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Cart</span>
            </Button>
          </div>
          <div >
            <Button className='bg-white border-0' style={{ padding: "8px 10px" }} >


              <span class="bi bi-shop" color='black' style={{ fontSize: "18px", color: "black" }} ></span>
              <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Become a Seller</span>
            </Button>
          </div>
          <div className='Rotate '>
            <span style={{
              fontSize: "25px",
            }} className='Rotate'>...</span>
          </div>

        </div>
      </div>


    </>
  )
}
