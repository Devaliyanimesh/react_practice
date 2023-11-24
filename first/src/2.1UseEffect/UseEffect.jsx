import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Propsudeffect from './Propsudeffect';

export default function UseEffect() {
    let [count, setcount] = useState(0)
    let [count2, setcount2] = useState(0)


// react ma sideEffect ne handle karva mate useeffect no use thai che ,side effect atele page per login page ave che tene handler kare che,
// exp login na hoy to 10sec pachi login nu page lavye tevi ,



    // useEffect(() => {
    //     console.log("-->without Dependesy");
    // })


    useEffect(() => {
        // only arry use in Useeffect
        console.log("-->with blank defency");
    }, [])
    useEffect(() => {
        console.log("-->with blank  count1 defency");
        // if(count%5==0 && count !==0){
        //  alert(`count is ${count}`)   
        // }
       
    }, [count])
    useEffect(() => {
        console.log("-->with blank count1 && count2 defency");
        // if(count2%5==0 && count2 !==0){
        //  alert(`count is ${count2}`)   
        // }
       
    }, [count2,count])
    // useEffect(() => {
    //     console.log("-->with blank  count1 defency");
    //     // if(count%5==0 && count !==0){
    //     //  alert(`count is ${count}`)   
    //     // }
       
    // }, [count2])

    return (
        <>
            <h1>UseEffect{count}</h1>



            <Button onClick={() => setcount(count + 1)}>Increment</Button>
            <hr />
            <h1>UseEffect{count2}</h1>
            <Button onClick={() => setcount2(count2 + 1)}>Increment</Button>
            <Propsudeffect count={count} />

        </>
    )
}
