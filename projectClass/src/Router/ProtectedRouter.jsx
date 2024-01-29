import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const MenProted=({ Component,WomanComponent,kidsComponent })=> {
  let navigate = useNavigate();

  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    let type = normal?.some?.((e) => e.userType === "user");
    if (!normal || !type) {
      toast.warn("you are not user");
      navigate("/");
    }
  }); // Add an empty dependency array here to run the effect only once on mount

  return <div>
    {Component}
    {WomanComponent}
    {kidsComponent}
    </div>;
}


