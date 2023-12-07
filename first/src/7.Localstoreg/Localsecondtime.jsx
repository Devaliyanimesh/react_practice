import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

export default function Localsecondtime() {
    let [value, setvalue] = useState("")
    let [save, setsave] = useState([])
    const addd = () => {
        setsave([...save, value])
        localStorage.setItem("Todo", JSON.stringify([...save, value]))
        setvalue("")
    }
    useEffect(()=>{
        let jsondata=localStorage.getItem("Todo")
        setsave(jsondata || [])
    },[])
    return (
        <>

            <div className='w-25 m-auto'>
                <h1 className='text-center'>Todo</h1>
                <div className='d-flex gap-2'>
                    <Input value={value} onChange={(e) => setvalue(e?.target?.value)} />
                    <Button onClick={() => addd()}>Add</Button>
                </div>
            </div>
            <div className='border border-dark w-25 m-auto mt-5'>
                <h1 className='text-center'> Your item</h1>
                <hr className='border border-dark' />
                <ul>
                    {
                        save.map((e, i) => {
                            return <div key={i} className='d-flex justify-content-between mt-2'>
                                <li>{e}</li>
                                <Button>Delet</Button>
                            </div>

                        })
                    }
                </ul>
            </div>
        </>
    )
}
