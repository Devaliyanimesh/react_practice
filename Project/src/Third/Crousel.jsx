import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Img1 from '../assets/slider1.webp'
import Img2 from '../assets/slider2.webp'
import Img3 from '../assets/slider3.webp'
import Img4 from '../assets/slider4.webp'
import Img5 from '../assets/slider5.webp'





function DarkVariantExample() {
  return (
    <div style={{ padding: "0px 20px" }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img5}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
