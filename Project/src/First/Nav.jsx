import React from 'react'
import ImgUrl from '../assets/logo.svg'

import { Button } from 'reactstrap'
import '../App.css'


export default function Nav() {
  return (
    <>
      <div className="align-items-center d-flex col-12   " style={{ backgroundColor: ' rgb(255, 255, 255)', }}>
        <div className='d-flex gap-5 col-8 align-items-center p-3  '>
          <div className="Logo col-2" color='danger '>
            <img src={ImgUrl} alt="" />
          </div>
          <div className='col-10 '>
            <button className='d-flex align-items-center col-11 rounded-2 border-0 overflow-hidden ' style={{ backgroundColor: ' rgb(214, 229, 236)' }} >
              <i class="bi bi-search" style={{ backgroundColor: "transparent", color: "gray", fontSize: "20px" }} ></i>
              <input type="sarch" className=' border-0 rounded-5  col-12 py-1' style={{ backgroundColor: 'transparent' }} placeholder='Search for products,Brands and More' />
            </button>
          </div>
        </div>
        <div className='col-4 d-flex gap-3 align-items-center  overflow-hidden ' >
          <div >
            <Button className='bg-white border-0 ' >
              <i class="bi bi-person-circle" color='black' style={{ fontSize: "18px", color: "black" }}></i>
              <span style={{ marginLeft: "10px", fontSize: "15px", color: 'black' }}>User</span>
            </Button>
          </div>
          <div >
            <Button className='bg-white border-0'  >
              <i class="bi bi-cart" color='black' style={{ fontSize: "18px", color: "black" }}></i>
              <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Cart</span>
            </Button>
          </div>
          <div >
            <Button className='bg-white border-0'  >


              <span class="bi bi-shop" color='black' style={{ fontSize: "18px", color: "black" }} ></span>
              <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Become a Seller</span>
            </Button>
          </div>
          <div className='dropdown'>
            <a className='btn btn-secondary dropdown-toggle' href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              ...
            </a>

            <ul className='dropdown-menu' aria-labelledby="dropdownMenuLink">
              <li><a className='dropdown-item' href="#">Action</a></li>
              <li><a className='dropdown-item' href="#">Another action</a></li>
              <li><a className='dropdown-item' href="#">Something else here</a></li>
            </ul>
          </div>

        </div>
      </div>


    </>
  )
}
