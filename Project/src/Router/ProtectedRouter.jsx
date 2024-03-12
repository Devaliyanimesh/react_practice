import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ profile }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let chekdata = JSON.parse(localStorage.getItem("userlogin"));
    if (!chekdata) {
      toast.warn("Please Login");
      navigate("/");
    }
  });
  return <div>{profile}</div>;
};
