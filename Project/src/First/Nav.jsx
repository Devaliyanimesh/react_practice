import React from 'react'
import ImgUrl from '../assets/logo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'reactstrap'
import '../App.css'
import img from '../assets/plus.svg'
import Forme from '../Form/LoginForm';
import NewLogin from '../Form/NewLogin';


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
              <i className="bi bi-search" style={{ backgroundColor: "transparent", color: "gray", fontSize: "20px" }} ></i>
              <input type="sarch" className=' border-0 rounded-5  col-12 py-1' style={{ backgroundColor: 'transparent' }} placeholder='Search for products,Brands and More' />
            </button>
          </div>
        </div>
        <div className='col-4 d-flex gap-2 align-items-center ' style={{ color: "red" }} >
          <Dropdown >
            <Dropdown.Toggle style={{ backgroundColor: "transparent", border: "none", color: "black", marginTop: "-4px" }} className='lol'>
              <span className='bi bi-person-circle ' style={{ fontSize: "20px", }}></span> <span style={{ fontSize: "15px" }}>user</span>
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <div className='d-flex  align-items-center'>
                <Dropdown.Item href="#/action-1"><span><NewLogin/></span></Dropdown.Item>
                <Dropdown.Item href="#/action-1"><span><Forme/></span></Dropdown.Item>
              </div>
              <hr />
              <div style={{marginTop:"-15px"}}>
                <Dropdown.Item href="#/action-2"><span className='bi bi-person-circle  fs-5' > <span className='ms-2 fs-6'>My Profile</span></span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><img src={img} className='fs-5' alt="" /><span className='ms-2'>Flipcart Plus Zone</span></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><span className='bi bi-box-seam  fs-5' > <span className='ms-2 fs-6'>Order</span></span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span className='bi bi-heart fs-5' alt="" /><span className='ms-2'>Wishilst</span></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><span className='bi bi-gift  fs-5' > <span className='ms-2 fs-6'>Rewards</span></span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span className='bi bi-credit-card-2-front fs-5' alt="" /><span className='ms-2'>Gift Card</span></Dropdown.Item>
              </div>

            </Dropdown.Menu>
          </Dropdown>

          <Button className='bg-white border-0'  >
            <i className="bi bi-cart" color='black' style={{ fontSize: "18px", color: "black" }}></i>
            <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Cart</span>
          </Button>


          <Button className='bg-white border-0'  >


            <span className="bi bi-shop" color='black' style={{ fontSize: "18px", color: "black" }} ></span>
            <span style={{ marginLeft: "5px", fontSize: "15px", color: 'black' }}>Become a Seller</span>
          </Button>


          <Dropdown >
            <Dropdown.Toggle style={{ backgroundColor: "transparent", border: "none", color: "black" }}>
              ...
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1"><span className="bi bi-bell me-2"></span>Notification Prefenrnce</Dropdown.Item>
              <Dropdown.Item href="#/action-2"><span className="bi bi-headset me-2"></span>24x7 Customer care</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><span className='bi bi-graph-up-arrow '></span><span >Advertise</span></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>



        </div>
      </div>


    </>
  )
}



