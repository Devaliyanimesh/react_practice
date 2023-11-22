import React from 'react'
import Img from '../assets/1.webp'
import Img1 from '../assets/2.webp'
import Img2 from '../assets/fasss.png'
import Img3 from '../assets/com.png'
import Img4 from '../assets/furn.png'
import Img5 from '../assets/appliances.webp'






export default function Second() {
  return (
    <>
    <div className='my-3  bg-primary overflow-hidden'>
      
      <div className='d-flex align-items-center 'style={{gap:'75px', margin:"0px 20px",textAlign:'center' }}>
      <div className="first  ">
        <img src={Img} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Grocery</figcaption>
      </div>
      <div className="first   " >
        <img src={Img1} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Mobile</figcaption>
      </div>
      <div className="first  ">
        <img src={Img2} alt="" style={{width:"60px"}} />
        <div className='d-flex align-items-center '>
        <figcaption style={{fontWeight:'600'}}>Fashion</figcaption>
        <span className='bi bi-caret-down-fill ' style={{fontSize:"15px"}}></span>
        </div>
      </div>
      <div className="first  ">
        <img src={Img3} alt="" style={{width:"90px"}} />
        <div className='d-flex align-items-center '>
        <figcaption style={{fontWeight:'600'}}>Electronic </figcaption>
        <span className='bi bi-caret-down-fill ' style={{fontSize:"15px"}}></span>
        </div>

      </div>
      <div className="first   " >
        <div style={{height:'60px' ,width:'110px'}}>      
            <img src={Img4} alt=""  style={{width:"130px",marginTop:'-40px'}} />
        </div>

        <div className='d-flex align-items-center '>
        <figcaption style={{fontWeight:'600'}}>Home & furnicture </figcaption>
        <span className='bi bi-caret-down-fill ' style={{fontSize:"15px"}}></span>
        </div>
      </div>
      <div className="first ">
        <img src={Img5} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Appliances</figcaption>
      </div>
      <div className="first bg-danger ">
        <img src={Img} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Grocery</figcaption>
      </div>
      <div className="first bg-danger ">
        <img src={Img} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Grocery</figcaption>
      </div>
      <div className="first bg-danger ">
        <img src={Img} alt=""  />
        <figcaption style={{fontWeight:'600'}}>Grocery</figcaption>
      </div>
      </div>
      <script>

      </script>
    </div>
    </>
  )
}
