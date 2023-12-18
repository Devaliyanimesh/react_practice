import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function UseredusePayload() {
    let Reduserr = (state, action) => {
        console.log(state, action);
if (action.actiontype=="Inc") {
    return{count:state.count+action.playload}
}
    }
    let [count, dispatch] = useReducer(Reduserr, { count: 1000 })
    return (
        <>
        <div  className='m-auto w-50'>
            <h1>Count value is '{count.count}'</h1>
            <Button  className="w-50" onClick={()=> dispatch({actiontype:"Inc",playload:10})}>Add</Button>
            </div>
        </>
    )
}
