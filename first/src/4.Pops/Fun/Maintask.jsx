import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Maintask(props) {
    let [changee, setChangee] = useState(props?.name)
    let [isnext, setisnext] = useState(true)

    const changename = () => {
        setChangee(isnext ? props.name:"latesh")
            setisnext(!isnext)
    }
    return (<>

        <div className='m-3'>
            <h1>Hello, {changee}</h1>
            <Button onClick={changename} className='danger'>Click here</Button>
        </div>
    </>
    )
}
