import React from "react"
import  ReactDOM  from "react-dom/client"
import Funcom from "./componets/functional/Funcom"
/
let x=<h1>What is this...?</h1>
let arry=["urvish","jeel","nimesh"]
let obj={name:"Nimesh"}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
{/* <h1>Hello</h1>
<h1>{15+15}</h1>
{x}
{arry.map((e)=>{
    return <h1>{e}</h1>
})} */}
{obj.name}
<Funcom/>

</React.StrictMode>
)
