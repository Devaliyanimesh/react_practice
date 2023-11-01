import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class UsestateClass extends Component {
    constructor() {
        super()
        this.colorarr = ["red", "black", "yellow", "blue", "pink"]
        this.texValue = ["yellow", "blue", "pink","red", "black", ]

        this.state={
            countIndex:0,
        }
        this.texColor={
            texIndex:0,
        }
        

    }
 clickButton(){
    this.setState({countIndex: this.state.countIndex +1})
  this.setState({texIndex: this.texColor.texIndex +1}),
  console.log("--->");
 }

    render() {
        return (
            <div style={{ 
                backgroundColor: this.colorarr[this.state.countIndex], 
                color: this.texValue[this.texColor.texIndex],
                }}>
                <h1>Hii color</h1>
                <Button onClick={() => this.clickButton()}>Click me</Button>
            </div>

        )
    }
}
