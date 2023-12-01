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
    <div className="container p-0 m-0 ">
      <div div className=' bg-white grid lg:grid-cols-12 lg:py-0 xl:grid-cols-12 lg:gap-2 items-center   py-2   lg:pe-0 '>
        <div className=' lg:col-span-2  xl:col-span-2 '><img src={ImgUrl} alt="" /></div>
        <div className='bg-slate-200 text-xl rounded-lg  d-flex  lg:col-span-5  xl:col-span-5 sm:cols-span-4' style={{ padding: "5px 0" }}><span className='bi bi-search text-xl  ms-2 text-black  '></span><input type="text" className='w-[100%]  bg-transparent' /></div>
        <div className=' text-xl ms-2  '><span className='bi bi-person-circle'></span><span className='ms-2'>User</span> </div>
        <div className=' text-xl '><span className='bi bi-bag'></span><span className='ms-2'>Cart</span></div>
        <div className='  text-xl lg:col-span-2 xl:col-span-2'><span className='bi bi-shop-window'></span> <span className='ms-2'> Become Seller</span></div>
        <div className=' text-xl  ' ><span className='bi bi-three-dots-vertical'></span></div>
      </div>
      </div>
      
    </>
  )
}



