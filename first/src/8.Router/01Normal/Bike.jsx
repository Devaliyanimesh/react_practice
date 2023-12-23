import React from "react";
import { Link, NavLink ,Outlet} from "react-router-dom";
import { Button } from "reactstrap";

export default function Bike() {
  return (
    <>
      <div className="ms-5 d-flex gap-5 ">
        <Button>
          <Link to={"/bike/normal"}>Normal</Link>
        </Button>
        <Button>
          <NavLink to={"/bike/sport"}> sport</NavLink>
        </Button>
      </div>
      <Outlet/>
    </>
  );
}
