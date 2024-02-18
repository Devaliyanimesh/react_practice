import React from 'react'
import img1 from './../../../img/bike.jpeg'

import './Home.css'

export default function Home() {
  return (
    <>
    <div className='image'>
      <img className='img' src={img1} alt="" />
      {/* <p>
        <span>Welcome</span> to <br/> The world Of <br/> Tasty &Gresh Food
      </p> */}
    </div>
      {/* Content */}
      {/* <div className="header-content">
        <div className="content">
          <h1>
            <span>Welcome</span> to <br /> The world of <br /> Tasty & Fresh Food.
          </h1>
          <p>
            Keep it easy with these simple but delicious recipes <br />
            From make-ahead lunches and midweek meals to<br /> fuss-free sides.
          </p>
        </div> */}
      </>
      )
}
