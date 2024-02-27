import React, { useReducer,  } from "react";
import { Button } from "reactstrap";

export default function UseReduser() {
  const reduser = (state, action) => {
    if (action.actionType ==="increment") {
        return {count:state?.count + action?.playload}
    }
    if (action.actionType ==="dec") {
        return {count:state?.count - action?.playload}
    }
  };
  let [count, setCount] = useReducer(reduser, { count: 100 });
  return<>
  <div>{count?.count}</div>;
  <Button onClick={()=>setCount({actionType:"increment",playload:50})} >Increment</Button>
  <Button onClick={()=>setCount({actionType:"dec",playload:10})} >Increment</Button>

  </> 
}
