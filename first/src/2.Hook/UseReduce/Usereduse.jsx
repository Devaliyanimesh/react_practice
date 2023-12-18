import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function Usereduse() {
    const reduser = (state, action) => {
        console.log(state, action);
        if (action.active === "set") {
            return state+5
        }

    }

    let [value, dispatch] = useReducer(reduser, 100)
    return (
        <>
            <h1>Count is {value}</h1>
      
            <Button onClick={() => dispatch({ active: "set" })}>Addname</Button>
        </>)

}
