import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function Usereduser() {
let Reducer=(state,action)=>{
    if (action=="add2") {
        return  state +2
    }
    else if (action==="sub-2") {
        return  state -10
        
    }
    else{
        return state
    }
}

    let [count, setCount] = useReducer(Reducer,1000)
    return (
        <>
            <div className='m-auto w-25'>
                <h1>Count is {count}</h1>
                <Button onClick={()=>setCount("add2")}>Increment</Button>
                <Button onClick={()=>setCount("sub-2")}>Increment</Button>
                <Button onClick={()=>setCount("multi")}>Increment</Button>
           </div>
        </>
    )
}
