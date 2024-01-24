import React from "react";

import img1 from "./../../../Images/slider1.png";
import img2 from "./../../../Images/slider2.jpg";
import img3 from "./../../../Images/slider3.jpg";
import img4 from "./../../../Images/slider4.jpg";
import img5 from "./../../../Images/slider5.jpg";
import img6 from "./../../../Images/slider6.png";
import { Carousel } from "bootstrap";

export default function Crousal() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{margin:"0px 10px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Slide 2" />
        </div>{" "}
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="Slide 2" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
