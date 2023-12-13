import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'

export default function UserefCom() {
    const divref=useRef(null)
    const changebg=()=>{
        divref.current.style.backgroundColor="yellow"
        divref.current.innerText="hello"
        divref.current.style.color="black"
    }
    return (
        <>
        <div style={{ height:"300px", width:"300px" ,backgroundColor:"green" ,color:"white", margin:"auto", display:"grid",placeContent:"center"}} ref={divref}>
            My Name is Nimesh
        <Button onClick={changebg}>Change Color</Button>
        </div>
        </>
    )
}
