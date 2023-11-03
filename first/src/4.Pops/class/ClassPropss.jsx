import React, { Component } from 'react'

export default class ClassPropss extends Component {
  render() {
    console.log("--->");
    return (
    <>
    <h1>Hello,{this?.props?.data?.name}</h1>
    <h1>{this?.props?.data?.greeting}</h1>
    </>
    )
  }
}
