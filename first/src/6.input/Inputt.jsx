import { Button, Input } from 'reactstrap'
import React, { useState } from 'react'

export default function Inputt() {
    let [food, setfood] = useState("")
    let [foodList, setfoodList] = useState([])

    const change = (ele) => {
        setfood(ele.target.value);
    }
const addvalue =()=>{
    setfoodList([...foodList,food])
    setfood("")

}
    return (
        <>
           
            <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                <h1 className='text-center'>Food Zone</h1>
                <div className="row  rounded-5 m-1">
                    <div className="col-8">
                        <Input value={food} className='bg-danger text-white' onChange={(e) => change(e)} />
                    </div>
                    <div className="col-4">
                        <Button className='bg-primary text-white'  onClick={()=>addvalue()} >Add</Button>
                    </div>
                </div>
            </div>
            {foodList.length > 0 ?   <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                     {      console.log(foodList.length)} 
                <h1 className='text-center'>Food List</h1>
                <div >
               {foodList.map((e,elemet)=>{
                return <p>{elemet+1}{e}</p>
               })}
               </div>
            </div>: <h5 className='ms-5'>Plese enter food</h5>
            }
    
        </>
    )
}
