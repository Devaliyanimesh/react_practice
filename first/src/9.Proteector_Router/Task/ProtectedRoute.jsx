import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ components }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let Jsondata = localStorage.getItem("add");
    let normal = JSON.parse(Jsondata);
    if (!normal) {
      toast.warn("please login");
      navigate("/");
    }
  });
  return <>{components}</>;
};

export const UserRouter = ({ components, componentss }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let Jsondata = localStorage.getItem("user");
    let normal = JSON.parse(Jsondata);
    if (!normal || !normal.user === "user") {
      toast.warn("please login");
      navigate("/");
    }
  });
  return (
    <>
      <div>
        {componentss}
        {components}
      </div>
    </>
  );
};

