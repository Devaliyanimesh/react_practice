import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function InputYaskReduce() {
    let Reduser = (state, action) => {
if (action == "done") {
    return{count:state.count+100}
}

    }
    let [value, dispatch] = useReducer(Reduser, {count:1000})
    return (<>
        <h1>I am Nimesh{value.count}</h1>
        {/* <h1>I am Nimesh{value.amount}</h1> */}

        <Button onClick={()=> dispatch("done")} >count</Button>
        <Button >amount</Button>
    </>
    )
}
