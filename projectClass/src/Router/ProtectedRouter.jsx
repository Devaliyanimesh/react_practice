import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const MenProted = ({ Component, WomanComponent, kidsComponent }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("local");
    let normal = JSON.parse(json);
    if (!normal ) {
      toast.warn("Please Login");
      navigate("/");
    }
  });

  return (
    <div>
      {Component}
      {WomanComponent}
      {kidsComponent}
    </div>
  );
};
