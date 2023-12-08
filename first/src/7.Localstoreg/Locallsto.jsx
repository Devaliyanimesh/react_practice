import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

export default function Locallsto() {
    let [value, setvalue] = useState("")
    let [add, setadd] = useState([])
    let [index, setindex] = useState(null)
    let [check, setcheck] = useState([])










    const adddata = () => {
        setadd([...add, value])
        localStorage.setItem("Todo", JSON.stringify([...add, value]))
        setvalue("")
    }
    useEffect(() => {
        let json = localStorage.getItem("Todo",)
        let normal = JSON.parse(json)
        setadd(normal || [])

    }, [])
    const deletee = (index) => {
        let filter = add.filter((e, i) => {
            return index !== i
        })
        setadd(filter)
        localStorage.setItem("Todo", JSON.stringify(filter))

    }
    let Updatee = (e, i) => {
        setvalue(e)
        setindex(i)
    }
    const uptodate = () => {
        add.splice(index, 1, value)
        setadd([...add])
        localStorage.setItem("Todo", JSON.stringify([...add]))
        setvalue("")
        setindex(null)
    }
    const deletall = () => {
        localStorage.clear()
        setadd([])
    }
    const checkbox = (e, i) => {

        if (check[i] == e) {
            check.splice(i, 1)
            setcheck([...check])
            
        }
        else {

            setcheck([...check,e])
        }

    }
    const logmessage = () => {
        console.log(check);
        setcheck([])
        


    }
    return (
        <>
            {check}
            <h1 className='text-center'>Todo list</h1>
            <div className='w-25 m-auto d-flex gap-2'>
                <Input value={value} onChange={(e) => setvalue(e?.target?.value)} />
                {
                    index || index === 0 ? <Button onClick={() => uptodate()}>upadte</Button> :
                        <Button onClick={() => adddata()}>ADD</Button>
                }
                <Button onClick={() => deletall()}>Delet all</Button>
                <Button onClick={() => logmessage()}>log</Button>


            </div>

            <div>
                <div className=' border border-dark w-50 m-auto mt-5  '>
                    <ul>
                        {add.map((e, i) => {

                            return <div className='d-flex  justify-content-between mt-2 p-2  ' key={i}>
                                <li >{e}</li>
                                <Button onClick={() => deletee(i)}>Delet</Button>
                                <Button onClick={() => Updatee(e, i)}>update</Button>
                                <input type="checkbox" onClick={() => checkbox(e, i)} />

                            </div>

                        })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}
