import React from 'react'
import img1 from './../../../Images/slider1.png'
import img2 from './../../../Images/slider2.jpg'
import img3 from './../../../Images/slider3.jpg'
import img4 from './../../../Images/slider4.jpg'
import img5 from './../../../Images/slider5.jpg'
import img6 from './../../../Images/slider6.png'


export default function Crousal() {
  return (
  <>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={} className="d-block w-100" alt="..."/>
    </div>
    <div classNameName="carousel-item">
      <img src={} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}
