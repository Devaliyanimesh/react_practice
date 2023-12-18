import { Button } from 'reactstrap'
import React, { useReducer, useRef, useState } from 'react'

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
  

    return (
        <>
            <div className='w-25 m-auto'>
                <input type="text" onChange={(e) => change(e)} ref={adddiv} />
                <h1>Count is {count}</h1>
                <Button onClick={() =>  dispatch({ actiontype: "inc", payload: add, remove: adddiv.current.value = "" }) } > ADD</Button>
            </div>
        </>
    )
}
