import React, { Component } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'

export default class Carddclass extends Component {
constructor(){
    super()
   
}
  render() {
    return (
     <>
     <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
 {this.props.data.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     {this.props.data.brand}

    </CardSubtitle>
    <CardText>
    {this.props.data.description}
    
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
     </>
    )
  }
}
