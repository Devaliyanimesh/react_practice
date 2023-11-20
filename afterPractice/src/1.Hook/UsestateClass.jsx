import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class UsestateClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    // 1
    // increement(){
    //     this.setState({count: this.state.count+1})

    // }
    render() {
        return (
            <>
                <h6>Count is {this.state.count} </h6>
                {/* 1 */}
                {/* <Button onClick={()=>this.increement()}>Increment++</Button> */}
                {/* 2 */}
                <Button onClick={()=>{this.setState({count:this.state.count+1})}}>Incrementtt</Button>
            </>
        )
    }
}
