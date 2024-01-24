import React from "react";

export default function Fotter() {
  return (
    <>
      <div
        className="d-flex  justify-content-between   bg-black text-white mt-2"
        style={{ padding: "40px 40px", alignItems: "flex-start", margin:"0px 10px" }}
      >
        <div className="Categories text-center ">
          <h5>Categories</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li>Running Shoes</li>
            <li>Yoga Shoes</li>
            <li>Sports Shoes</li>
            <li>Casual Shoes</li>
          </ul>
        </div>
        <div className="Buisness">
          <h5>Buisness</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>Company Profile</li>
            <li style={{ margin: "0" }}>Social Responsibility</li>
            <li style={{ margin: "0" }}>Brand Kit</li>
            <li style={{ margin: "0" }}>Media</li>
          </ul>
        </div>
        <div className="About ">
          <h5>About</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>Board of Directors</li>
            <li style={{ margin: "0" }}>Company Profile</li>
            <li style={{ margin: "0" }}>Careers</li>
            <li style={{ margin: "0" }}>Numbers Speak</li>
          </ul>
        </div>
        <div className="Useful_Links  ">
          <h5>Useful Links</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>Return Policies</li>
            <li style={{ margin: "0" }}>Announcements</li>
            <li style={{ margin: "0" }}>Have issues?</li>
            <li style={{ margin: "0" }}>Media Kit</li>
          </ul>
        </div>

        <div className="Follow Us   ">
          <h5>Follow Us</h5>
          <div
            style={{ display: "flex ", gap: "10px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", gap: "5px", textAlign: "center" }}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-linkedin"></i>
            </div>
            <div style={{ display:"flex",flexDirection:"column",alignItems:'flex-start'}}>
              <p className="m-0">704-154-1797</p>
              <p>devaliyanimesh61972@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
