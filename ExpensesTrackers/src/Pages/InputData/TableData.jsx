import React from "react";
import img1 from "./../../img/food.jpg";
import img2 from "./../../img/travel.webp";
import img3 from "./../../img/cellphonebill.jpg";
import img4 from "./../../img/cabelbill.jpg";
import img5 from "./../../img/housing.jpg";
import img6 from "./../../img/medicisens.jpg";
import img7 from "./../../img/bike.jpg";
import img8 from "./../../img/petrole.jpg";
import img9 from "./../../img/clothing.jpg";
import img10 from "./../../img/grocery.jpg";
import { Input } from "reactstrap";
let imgg=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]

export default function TableData() {
  return (
    <>
      <div className=" d-flex mt-3 gap-4 items-center px-2">
       {
          imgg.map((e,i)=>{
            return  <div className=" d-flex" key={i}>
            <div
              className=" overflow-hidden  w-20 h-20 relative  "
              style={{ borderRadius: "50%" }}
              role="button"
            >
              <img src={e} className=" w-full h-full " alt="" />
            </div>
            <div
              className="absolute   bg-black opacity-30 hover:opacity-0 transition duration-300 ease-in-out"
              style={{ borderRadius: "50%", width: "5.2%", height: "11.5%" }}
            ></div>
          </div>
          })
        }
       <div>
        <Input type="date" />
       </div>
      </div>
      
    </>
  );
}
