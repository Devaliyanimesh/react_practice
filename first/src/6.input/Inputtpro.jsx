import { Button, Input } from 'reactstrap';
import React, { useState } from 'react';

export default function Inputt() {
    let [food, setfood] = useState({ name: "", age: "" });
    let [foodList, setfoodList] = useState([]);

    const change = (ee) => {
        setfood({ ...food, name: ee.target.value });
    }

    const newchange = (e) => {
        setfood({ ...food, age: e.target.value });
    }

    const addvalue = () => {
        if (food.name.trim() === "" || food.age.trim() === "") {
            alert("Please fill both input fields");
        } else {
            setfoodList([...foodList, { name: food.name, age: food.age }]);

            setfood({ name: "", age: "" });
        }
    }

    return (
        <>
            <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                <h1 className='text-center'>Food Zone</h1>
                <div className="row  rounded-5 m-1">
                    <div  className="col-12">
                        <Input value={food.name} className='bg-danger text-white'
                            onChange={(ee) => change(ee)} />
                        <Input value={food.age}  className='bg-danger text-white'
                            onChange={(e) => newchange(e)} />
                    </div>
                    <div className="col-12">
                        <Button className='bg-primary text-white w-100' onClick={() => addvalue()} >Add</Button>
                    </div>
                </div>
            </div>
            <div className=' border border-5 border-primary w-25 m-5 p-2 '>
                <h1 className='text-center'>Food List</h1>
                <div >
                    {foodList.map((e, index) => (
                        <p key={index}>{e.name}{e.age}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
