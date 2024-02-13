import React, { useMemo, useState } from 'react'
import { Button } from 'reactstrap'

export default function Usememo() {
    let [count, setCount] = useState(0)
    let [amount, setAmount] = useState(1)
    const incrementHandler = () => {
        setCount(count + 1)
    }
    const genrateArry = () => {
        for (let i = 0; i < 100000000; i++) {

        }
        let arry = [count, count + 1, count + 2, count + 3]
        return arry
    }
    let nextArry = useMemo(genrateArry, [count])
    let amountHandler = () => {
        setAmount(amount + 1)
    }
    return (
        <div>
            <h1>count is ={nextArry[0]}</h1>
            <h1>count is ={nextArry[1]}</h1>
            <h1>count is ={nextArry[2]}</h1>
            <h1>count is ={nextArry[3]}</h1>

            <h1>{amount}</h1>
            <Button onClick={incrementHandler}>Increment</Button>
            <Button onClick={amountHandler}>amountHandler</Button>

        </div>
    )
}
