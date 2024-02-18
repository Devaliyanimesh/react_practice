import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './../../img/nimesh.png'
import './header.css'

export default function Header() {
  return (
    <>
      <header>

        <div className='img' >

          <img src={img} alt="" />
        </div>
        <div className='ul '>
          <ul className='list-unstyled'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/service'}>Services</NavLink></li>
            <li><NavLink to={'/project'}>Project</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>


          </ul>
        </div>
        <div className='copyright'>
          <p>Copyright © 2024 by Marketify

            All rights are reserved</p>
        </div>
      </header>
    </>
  )
}
