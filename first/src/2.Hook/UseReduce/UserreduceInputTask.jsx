import { Button } from 'reactstrap'
import React, { useReducer, useRef, useState } from 'react'
import { toast } from 'react-toastify'

export default function UserreduceInputTask() {
    let adddiv = useRef(null)

    let Reduser = (state, action) => {

        if (action.actiontype == "inc") {
            return state + +action.payload

        }
    }
    let [count, dispatch] = useReducer(Reduser, 1000)
    let [add, setadd] = useState(0)


    let change = (e) => {
        setadd(e.target.value)
    }
{console.log(add)}

    return (
        <>
            <div className='w-25 m-auto'>
                <input type="text" onChange={(e) => change(e)} ref={adddiv} />
                <h1>Count is {count}</h1>
                <Button onClick={() => { add == "" ? toast.error("Please fill Input") : dispatch({ actiontype: "inc", payload: add, remove: adddiv.current.value = "" ,add:setadd("")}) }} > ADD</Button>
            </div>
        </>
    )
}
