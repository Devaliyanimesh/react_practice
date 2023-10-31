import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class UsestateClass extends Component {
    constructor() {
        super()
        this.colorarr = ["red", "black", "yellow", "blue", "pink"]
        this.state={
            count:0,
        }
    }
 clickButton(){
    this.setState({count: this.state.count +1})
}


    render() {
        return (
            <div style={{ 
                backgroundColor: this.colorarr[this.state.count], 
                color:'white'
                }}>
                <h1>Hii color {this.state.count}</h1>
                <Button onClick={() => this.clickButton()}>Click me</Button>
            </div>

        )
    }
}
