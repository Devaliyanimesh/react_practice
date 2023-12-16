import React, { useRef } from 'react'
import { Button } from 'reactstrap'

export default function UseRef() {
    let div = useRef(null)
    const change = () => {
        div.current.style.backgroundColor = "red"
        div.current.style.color = "white"
    }
    return (
        <>
            <div className='w-25 m-auto'>
                <h1 ref={div}>I am useRef</h1>
                <Button onClick={change}>Change Style</Button>
            </div>
        </>
    )
}
