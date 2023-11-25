import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Task() {
    let [index, setindex] = useState(0)
    let Username = ["king", "Nimesh", "Latesh", "Nayandanger", "urvishsir", "kingofkotha"]
    let cheackarr = ["Nimesh", "lol", "Nayandanger"]


    let increment = () => {
        if (Username.length - 2 < index) {
            setindex(0)
        }
        else {
            setindex(index + 1)


        }

    }
    useEffect(() => {

        if (cheackarr.includes(Username[index])) {
            alert("alerdy include this value in table")
        }
        else {
            console.log("not display");
        }



    }, [index])
    return (
        <>
            <h1>name is {Username[index]}</h1>
            <Button onClick={() => increment()}>Button</Button>
        </>
    )
}
