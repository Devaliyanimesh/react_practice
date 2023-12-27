import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserRouter = ({ components }) => {
  let navigate = useNavigate;
  useEffect(() => {
    let Jsondata = localStorage.getItem("user");
    let normal = JSON.parse(Jsondata);
    console.log(normal);
    if (!normal) {
      toast.warn("please login");
      navigate("/");
    }
  });
  return (
    <>
      <div>{components}</div>
    </>
  );
};
