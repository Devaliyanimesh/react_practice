import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class LifecycleMethod extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("----->const");
    }
    componentDidMount(){
        console.log("componentDidMount:")
        
       
    }
    componentDidUpdate(){
        console.log(" componentDidUpdate:")
        
    }
  render() {
    console.log("---> Render");
    return (
        <>
        <h6>count is{this.state.count}</h6>      
        <div>LifecycleMethod</div>
        <Button onClick={()=>this.setState({count:this.state.count + 1})}>increment</Button>
        </>

    )
  }
}
