import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class UseClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    increment() {
        this.setState({ count: this?.state?.count + 1 })
        
    }
    render() {
        return (
            <>
                <h1>count is{this.state.count}</h1>
                <Button color='danger' onClick={() => this.increment()}>increment</Button>   </>
        )
    }
}
