import React from 'react'
import Img from '../assets/1.webp'
import Img1 from '../assets/2.webp'
import Img2 from '../assets/fashion.webp'
import Img3 from '../assets/compu.webp'
import Img4 from '../assets/furnicture.webp'
import Img5 from '../assets/appliances.webp'
import Img6 from '../assets/toyy.webp'
import Img7 from '../assets/travel.webp'
import Img8 from '../assets/bikee.webp'










export default function Second() {
  return (
    <>
      <div className='my-2   overflow-hidden' style={{backgroundColor:' rgb(255, 255, 255)'}}>

        <div className='d-flex align-items-center ' style={{ gap: '40px', margin: "0px 90px", textAlign: 'center', }}>
          <div>
            <img src={Img} alt="" />
            <figcaption style={{ fontWeight: '600' }}>Grocery</figcaption>
          </div>
          <div>
            <img src={Img1} alt="" />
            <figcaption style={{ fontWeight: '600' }}>Mobile</figcaption>
          </div>
          <div>
            <img src={Img2} alt=""  />
            <div className='d-flex align-items-center '>
              <figcaption style={{ fontWeight: '600' }}>Fashion</figcaption>
              <span className='bi bi-caret-down-fill ' style={{ fontSize: "15px" }}></span>
            </div>
          </div>
          <div>
            <img src={Img3} alt="" />
            <div className='d-flex align-items-center '>
              <figcaption style={{ fontWeight: '600' }}>Electronic </figcaption>
              <span className='bi bi-caret-down-fill ' style={{ fontSize: "15px" }}></span>
            </div>

          </div>
          <div>
            <div >
              <img src={Img4} alt=""  />
            </div>

            <div className='d-flex align-items-center '>
              <figcaption style={{ fontWeight: '600' }}>Home & furnicture </figcaption>
              <span className='bi bi-caret-down-fill ' style={{ fontSize: "15px" }}></span>
            </div>
          </div>
          <div >
            <img src={Img5} alt="" />
            <figcaption style={{ fontWeight: '600' }}>Appliances</figcaption>
          </div>
          <div >
            <img src={Img7} alt="" />
            <figcaption style={{ fontWeight: '600' }}>Travel</figcaption>
          </div>
          <div>
            <img src={Img6} alt="" style={{ width: "60px" }} />
            <div className='d-flex align-items-center '>
              <figcaption style={{ fontWeight: '600' }}>Toy & beuty & more</figcaption>
              <span className='bi bi-caret-down-fill ' style={{ fontSize: "15px" }}></span>
            </div>
          </div>
          <div >
            <div>
              <img src={Img8} alt="" />
            </div>
            <div className='d-flex'>
              <figcaption style={{ fontWeight: '600' }}>Two Wheelers</figcaption>
              <span className='bi bi-caret-down-fill ' style={{ fontSize: "15px" }}></span>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
