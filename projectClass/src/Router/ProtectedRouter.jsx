import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const MenProted = ({ Component, WomanComponent, kidsComponent }) => {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    let type = normal?.some?.((e) => e.userType === "user");
    if (!normal || !type) {
      toast.warn("you are not user");
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
