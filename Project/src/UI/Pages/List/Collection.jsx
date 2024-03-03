import React from "react";
import img1 from "./../../../Images/img1.avif";
import img2 from "./../../../Images/img2.avif";
import img3 from "./../../../Images/img3.avif";
import img4 from "./../../../Images/img4.avif";
import img5 from "./../../../Images/img-5.avif";
import img6 from "./../../../Images/mg6.avif";
import img7 from "./../../../Images/img7.avif";
import img9 from "./../../../Images/img9.avif";
import img10 from "./../../../Images/img10.avif";


export default function Collection() {
  return (
    <div className="flex gap-6 justify-center">
      <div className="pt-4  text-center  ">
        <img
          src={img1}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Winterwear</p>
      </div>
      <div className="pt-4  text-center">
        <img
          src={img2}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Shirt</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img3}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Kurta & jackets</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img4}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>T-Shirt</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img5}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Trousers</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img6}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>New Arrivals</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img7}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Nico Core</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img9}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Bestsellers</p>
      </div>{" "}
      <div className="pt-4  text-center">
        <img
          src={img10}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <p>Gift for him</p>
      </div>{" "}
     
    </div>
  );
}
