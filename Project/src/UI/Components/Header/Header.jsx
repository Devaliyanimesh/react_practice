import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import {
  Eye,
  Heart,
  IndianRupee,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import RegisterModal from "../../Pages/Register/RegisterModal";
import LoginModal from "../../Pages/Login/LoginModal";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const loginToggle = () => {
    console.log("------login------");
    setLoginModal(!loginModal);
  };
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    console.log("------reg------");
  };

  let dataa = useSelector((state) => state.athorsli);
  return (
    <>
      <RegisterModal modal={modal} toggle={toggle} loginToggle={loginToggle} />
      <LoginModal modal={loginModal} logintoggle={loginToggle} regiserToggle={toggle}
      />

      <p className="w-100 text-center  text-white bg-blue-900 p-0 m-0 text-sm py-2">
        A new season : Zanzibar |{" "}
        <a
          href="https://www.nicobar.com/collections/zanzibar"
          title="https://www.nicobar.com/collections/zanzibar"
          className="text-white"
        >
          Shop Collection
        </a>
      </p>
      <header className="flex header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 416 63"
          className="w-32 mt-1"
          role="button"
        >
          <g fill="#2f343e">
            <path
              data-name="Path 1"
              d="M6.273 29.546v24.306H0v-38.42L25.875 40V15.955h6.273v38.42z"
            ></path>
            <path
              data-name="Path 2"
              d="M69.784 2.116h6.011v37.9h-6.272v-37.9z"
            ></path>
            <path
              data-name="Path 3"
              d="M107.42 35.034a19.133 19.133 0 0119.341-19.341 16.738 16.738 0 0113.33 5.489l-3.92 4.443a16.425 16.425 0 00-9.409-3.92c-7.58 0-13.068 6.011-13.068 13.591s5.75 13.591 13.068 13.591a13.448 13.448 0 009.409-3.92l3.92 4.443a16.738 16.738 0 01-13.33 5.483c-10.716-.518-19.341-8.882-19.341-19.859z"
            ></path>
            <path
              data-name="Path 4"
              d="M183.739 20.41a19.3706811 19.3706811 0 1138.685-2.089 19.164 19.164 0 01-18.3 20.389 18.99 18.99 0 01-20.385-18.3zm32.409-1.568c-.524-7.578-6.273-13.332-13.852-16.805a16.876 16.876 0 00-16.285 16.113c.523 7.58 6.273 13.33 13.852 16.807 7.58-.261 16.808-6.534 16.285-16.116z"
            ></path>
            <path
              data-name="Path 5"
              d="M261.102 16.322h13.33c6.8 0 11.239 4.7 11.239 10.455a8.166 8.166 0 01-3.659 7.318 9.588 9.588 0 016.011 9.409c0 6.534-5.227 10.977-16.546 10.977h-16.636V16.322zm16.807 15.943c3.92 0 5.75-2.352 5.75-5.227s-1.83-5.227-5.75-5.227h-6.534v10.193h6.534zm1.83 16.2c4.182 0 6.273-2.352 6.273-5.489s-2.091-5.484-6.271-5.484h-8.364V46.47z"
            ></path>
            <path
              data-name="Path 6"
              d="M335.591 1.332l18.557 38.42h-6.8l-3.916-8.363h-15.945l-3.921 8.364h-6.534zm-6.011 24.307h10.454L334.807 16.4z"
            ></path>
            <path
              data-name="Path 7"
              d="M395.443 33.04h-3.659v16.2h-6.273V11.085h16.284c7.057 0 16.023 4.443 16.023 10.977a10.9 10.9 0 01-7.841 10.455L416 49.244h-7.319zm1.83-5.489c4.182 0 6.273-2.091 6.273-5.227s-2.091-5.489-6.273-5.489h-5.489v10.716z"
            ></path>
            <path
              data-name="Path 8"
              d="M204.643 57.516L184 44.182l-18.557 16.284v5.75L184 49.932 204.643 63l18.3-16.018v-5.75z"
            ></path>
          </g>
        </svg>
        {dataa?.user?.userType !== "admin" ? (
          <ul className="flex gap-5 ">
            <li>
              <NavLink role="button" className="link" to="/house">
                House & Home
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/women">
                Women
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/men">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/jwellery">
                Jwellery
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/giftshop">
                The Gift Shop
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/newArrivel">
                New Arrivals
              </NavLink>
            </li>
            <li>
              <NavLink role="button" className="link" to="/protectedRoute">
                Profile
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-5 ">
            <li>
              <NavLink className="link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/order">
                Order{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/product">
                Product
              </NavLink>
            </li>
            <li className="relative">
              <NavLink className="link" to="/user">
                Users
              </NavLink>
            </li>
          </ul>
        )}

        <div className="flex items-center gap-5  textalign ">
          <div className="" role="button">
            <IndianRupee size={16} />
            <p>INR</p>
          </div>
          <div role="button">
            <Eye size={16} />
            <p>Viewed</p>
          </div>

          <div role="button">
            <Search size={16} />
            <p>Search</p>
          </div>
          <div role="button">
            <Heart size={16} />
            <p>wishlist</p>
          </div>

          <div role="button">
            <ShoppingBag size={16} />
            <p>My Bag</p>
          </div>

          <div role="button" onClick={toggle}>
            <User size={16} />
            <p>Sign in</p>
          </div>
        </div>
      </header>
    </>
  );
}
