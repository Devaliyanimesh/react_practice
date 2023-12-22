import { Button } from "reactstrap";
import React from "react";


export default class LifeCylce extends React.Component {
  constructor() {
    super();
    console.log("Const");
    this.state={
        count:0
    }
  }
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("componenr update ");
  }
  componentWillUnmount() {
    console.log("remove");
  }
  increment(){

  }
  render() {
    console.log("yess");
    return (
      <>
    
        <h3> count is {this.state.count}</h3>
        <Button onClick={()=>this.setState({count:this.state.count+1})}>Incre</Button>
      </>
    );
  }
}

