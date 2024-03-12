import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import user from "./../../../../Images/user.png";
import { logOut } from "../../../../Reduxx/State/Statee";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let data = useSelector((res) => res.athorsli);
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  console.log(data.length);
  return (
    <div
      className="w-100 h-25 d-flex justify-content-center"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div>
        <div className="img">
          <img src={user} alt="" />
          <p>Name:-{data?.user?.name}</p>
          <p>Email:-{data?.user?.email}</p>
          <p>UserType:-{data?.user?.userType}</p>
        </div>
        <div>
          <Button className="w-100" onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
