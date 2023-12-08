import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

export default function Localsecondtime() {
    let [value, setvalue] = useState("")
    let [save, setsave] = useState([])
    let [index, setindex] = useState(null)
    const addd = () => {
        setsave([...save, value])
        localStorage.setItem("Todo", JSON.stringify([...save, value]))
        setvalue("")
    }
    useEffect(() => {
        let jsondata = localStorage.getItem("Todo")
        let normal = JSON.parse(jsondata)
        setsave(normal || [])
    }, [])
    const delett = (i) => {
        save.splice(i, 1)
        setsave([...save])
        localStorage.setItem("Todo", JSON.stringify([...save]))

    }
    const upda = (e, i) => {
        setvalue(e)
        setindex(i)

    }
    const updateee = () => {
        save.splice(index, 1, value)
        setsave([...save])
        localStorage.setItem("Todo", JSON.stringify([...save]))
        setvalue("")
        setindex(null)

    }
    const Deletall = () => {
        setsave([])
        localStorage.clear()
    }

    return (
        <>

            <div className='w-25 m-auto'>
                <h1 className='text-center'>Todo</h1>
                <div className='d-flex gap-2'>
                    <Input value={value} onChange={(e) => setvalue(e?.target?.value)} />
                    {
                        index || index === 0 ? <Button onClick={() => updateee()}>update</Button> :
                            <Button onClick={() => addd()}>Add</Button>

                    }
                    <Button onClick={() => Deletall()}>Clear</Button>

                    {
                        console.log("--->", index)
                    }
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

                                <Button onClick={() => delett(i)}>Delet</Button>
                                <Button onClick={() => upda(e, i)}>update</Button>
                                

                            </div>

                        })
                    }
                </ul>
            </div>
        </>
    )
}
