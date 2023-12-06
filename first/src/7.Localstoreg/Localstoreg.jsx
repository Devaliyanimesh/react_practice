import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

export default function Localstoreg() {
    let [value, setvalue] = useState("")
    let [list, setlist] = useState([])

    // localStorage.setItem(key)
    // removeItem(keyname)
    // clear ()badhu clear thai
    const addd = () => {

        setlist([...list, value])
    }
    return (
        <>

            <div className='w-25 m-auto'>
                <h1 className='text-center'>Todo</h1>
                <div className='d-flex gap-2'>
                    <Input value={value} onChange={(e) => setvalue(e?.target?.value)} /><Button onClick={() => addd()}>Add</Button>
                </div>
            </div>
            <div className='w-25 m-auto border border-dark mt-5 p-2 '>
                <h5 className='text-center'>All todo List</h5>
            <ul>
{list.map((e)=>{
    return <li>{e}</li>
})}
            </ul>
            </div>
        </> 
    )
}

