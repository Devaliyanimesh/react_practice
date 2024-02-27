import React, { createContext, useState } from "react";
import A from "./A";
export const nameContext = createContext();
export default function Usecontext() {
  let [value, setvalue] = useState({ name: "nimesh" });
  let[count,setCount]=useState(100)
  return (
    <nameContext.Provider value={value}>
      <A  value={count}/>
    </nameContext.Provider>
  );
}
