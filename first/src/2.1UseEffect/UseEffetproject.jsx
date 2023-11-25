import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseEffetproject() {
    const Username = ["Nimesh", "Latesh", "Nayandanger", "urvishsir", "kingofkotha"]
    let cheackarr = ["Latesh"]
    let [index, setindex] = useState(0)





    const changename = () => {


        if (Username.length - 2 < index) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }
        // useEffect(()=>{
        //     if(Username[index].length >=8){
        //         alert("name is so long")
        //     }
        // },[index])

    }
    return (
        <>
            <h1>My name is {Username[index]}</h1>

            <Button onClick={() => changename()}>change name</Button>
            <hr />
            {/* <h1>My name is {count}</h1>
            <Button onClick={() => setcount(count + 1)}>change name</Button> */}

        </>
    )
}
