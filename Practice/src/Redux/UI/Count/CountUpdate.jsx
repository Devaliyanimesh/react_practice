import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { intone } from "../../App/Future/count";

export default function CountUpdate() {
  let dispatch=useDispatch()
  return (
    <>
      <Button onClick={()=>dispatch(intone())} >increment</Button>
    </>
  );
}
