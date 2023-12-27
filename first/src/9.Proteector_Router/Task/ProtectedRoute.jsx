import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ components, componentsone }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("user");
    let normal = JSON.parse(json);
    console.log(normal);
    if (!normal || normal?.type !== "user") {
      toast.warn("please login");
      navigate("/");
    }
  });
  return (
    <>
      <div>{components}</div>
      <div>{componentsone}</div>
    </>
  );
};

export const EmployeProtected = (props) => {
  console.log(props);
  let navigate = useNavigate();
useEffect(()=>{

  let json=localStorage.getItem("user")
  let normal=JSON.parse(json)
  console.log("-->",normal);
  if (!normal || normal.type !=="employe") {
    toast.warn("please login");
    navigate("/");
  }
});
  return (
    <>
    <h1>shash</h1>
    {props.typefv}

    </>
  )
};
