import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function Usereduse() {
    const reduser = (state, action) => {
        if (action==="set") {
       
            return {name:"king"}
        }

    }

    let [value, dispatch] = useReducer(reduser, { name: "Nimesh" })
    return (
        <>
            <h1>My name is {value.name}</h1>
            <Button onClick={() => dispatch("set")}>Addname</Button>
        </>)

}
