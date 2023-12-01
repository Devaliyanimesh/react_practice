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
      <div div className=' bg-white grid grid-cols-12 gap-2 items-center  ps-5  py-2'>
        <div className='  col-span-2'><img src={ImgUrl} alt="" /></div>
        <div className='bg-slate-200 text-xl rounded-lg  d-flex  col-span-5' style={{ padding: "5px 0" }}><span className='bi bi-search text-xl  ms-2 text-black  '></span><input type="text" className='w-[100%]  bg-transparent' /></div>
        <div className=' text-xl ms-2 '><span className='bi bi-person-circle'></span><span className='ms-2'>User</span> </div>
        <div className=' text-xl '><span className='bi bi-bag'></span><span className='ms-2'>Cart</span></div>
        <div className='  text-xl col-span-2'><span className='bi bi-shop-window'></span> <span className='ms-2'> Become Seller</span></div>
        <div className=' text-xl ' ><span className='bg-blue-900 lol'>...</span></div>
      </div>

    </>
  )
}



