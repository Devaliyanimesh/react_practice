import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function UseredusePayload() {
    let Reduserr = (state, action) => {
        if (action.actiontype == "Inc") {
            return { ...state, count: state.count + action.playload }
        }
        else if (action.actiontype = "Dec") {
            return { ...state, amount: state.amount + action.playload }
        }
    }
    let [count, dispatch] = useReducer(Reduserr, { count: 1000, amount: 1 })
    return (
        <>
            <div className='m-auto w-50'>
                <h1>Count value is '{count.count}'</h1>
                <h1>amount value is '{count.amount}'</h1>
                <div className='w-100 d-flex flex-column gap-3'>
                    <Button className="w-50" onClick={() => dispatch({ actiontype: "Inc", playload: 10 })}>count</Button>
                    <Button className="w-50" onClick={() => dispatch({ actiontype: "Dec", playload: 10 })}>Amount</Button>
                </div>
            </div>
        </>
    )
}
