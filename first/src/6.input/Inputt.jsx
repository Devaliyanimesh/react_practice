import { Button, Input } from 'reactstrap'
import React, { useEffect, useState } from 'react'

export default function Inputt() {
   
    let [food, setfood] = useState("")
    // four-->input ni value  store karva mate arry ma mukvani maultiple che atle
    let [foodList, setfoodList] = useState([])
    // third--> input ni value kema male te jovani pachi tene hook ma mukvani and food ne input ma
    const change = (ele) => {
        setfood(ele.target.value);
    }
     {/* five--> pachad ni value store karvani tena mate [spred opretor no use karvano ,food]
    pachi input khali karvanu che atle setfood("") blank karvanu  */}
    const addvalue = () => {
        if(food == ""){
alert("plese fill this input")
        }
        else{
            setfoodList([...foodList, food])
            setfood("")
        }
      

    }
   
    return (
        <>

            <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                <h1 className='text-center'>Food Zone</h1>
                <div className="row  rounded-5 m-1">
                    <div className="col-8">
                        {/* first */}
                        <Input value={food} className='bg-danger text-white'
                            // second e.ma input ni value male atle
                            onChange={(e) => change(e)} />
                    </div>
                    <div className="col-4">
                       
                        <Button className='bg-primary text-white' onClick={() => addvalue()} >Add</Button>
                    </div>
                </div>
     
            </div>
            {foodList.length >= 0   ?  <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                {console.log(foodList.length)}
                <h1 className='text-center'>Food List</h1>
                <div >
                    {foodList.map((e, elemet) => {
                        return <p>{elemet + 1}{e}</p>
                    })}
                </div>
            </div> : <h5 className='ms-5'>Plese enter food</h5>
            
            }
       
        </>
    )
}
