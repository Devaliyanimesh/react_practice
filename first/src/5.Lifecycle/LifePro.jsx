import { Button } from 'reactstrap'
import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            point: 0,
            // state ma object  &null ave
        };
    }
    incrementcount() {
        this.setState({ count: this.state.count + 1 });
        console.log("--");
    }
   
    render() {
        return (
            <div>
                <h1>Count is {this.state.point}</h1>
                <h1>Count is {this.state.count}</h1>
                <Button onClick={() => this.incrementcount()}> increment</Button>
            </div>
        )
    }
}
