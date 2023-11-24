import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        console.log("-->");
        alert("component remove")
    }
  render() {
    return (
      <div style={{color:"red"}}>Unmount</div>
    )
  }
}
