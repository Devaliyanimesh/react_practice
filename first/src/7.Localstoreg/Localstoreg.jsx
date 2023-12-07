import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Input } from 'reactstrap'
import UseState from '../2.Hook/UseState'

export default function Localstoreg() {
    let [value, setvalue] = useState("")
    let [list, setlist] = useState([])
    let [index, setindex] = useState(null)

    // localStorage.setItem(key)
    // removeItem(keyname)
    // clear ()badhu clear thai
    const addd = () => {
        if (value === "") {
            toast.error("please fill")

        }
        else {

            setlist([...list, value])
            localStorage.setItem("todolist", JSON.stringify([...list, value]))
            setvalue("")
            //    string ma convert karva mate stringify ma convert karyu
            // list tame karso to [] khali avse tyar biji value apso atle tema store thase
            // tena mate je setlist ma api hoy te same apvani
        }
    }
    // automatic call thy atle  useEffect use karsu

    useEffect(() => {
        let jsondata = localStorage.getItem("todolist")
        let noramal = JSON.parse(jsondata)

        setlist(noramal || [])
        // conditon jo local storeg khali hase to dom  ma kai dekhase nai tena mate [] mukyo

    }, [])
    const deletee = (ii) => {
        const filter = list.filter((e, i) => {
            return i !== ii
        })
        setlist(filter)
        localStorage.setItem("todolist", JSON.stringify(filter))
    }
    const update = (e, i) => {
        setvalue(e)
        setindex(i)

    }
    const updatevalue = (i) => {
        list.splice(i, 1,value)
        setlist([...list])
        setvalue("")
        setindex(null)
        localStorage.setItem("todolist", JSON.stringify([...list]))
    }
    const allclear = () => {
        setlist([])
        localStorage.clear()
    }
    return (
        <>

            <div className='w-25 m-auto'>
                <h1 className='text-center'>Todo</h1>
                <div className='d-flex gap-2'>
                    <Input value={value} onChange={(e) => setvalue(e?.target?.value)} />
                    {console.log(index)}
                    {
                        index===0 || index ?<Button onClick={() => updatevalue()}>Update</Button> :
                        <Button onClick={() => addd()}>Add</Button>
                    }
                    <Button className='' onClick={() => allclear()}>Clear</Button>

                </div>
            </div>
            {
                list.length > 0 ? console.log("yes") : console.log("no")
            }
            <div className='w-25 m-auto border border-dark mt-5 p-2 '>
                <h5 className='text-center'>All todo List</h5>
                <ul>
                    {list.map((e, i) => {
                        return (
                            <div key={i}>

                                <div className='d-flex align-item-center justify-content-between'>
                                    <li className='mt-2' key={i}>{e}</li>
                                    <Button className='mt-2' color='danger ' onClick={() => deletee(i)}>Delet</Button>
                                    <Button className='mt-2' color='danger ' onClick={() => update(e, i)}>update</Button>

                                </div>
                            </div>


                        )
                    })}
                </ul>
            </div>
        </>
    )
}

