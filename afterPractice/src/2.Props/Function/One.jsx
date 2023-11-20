import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export default function One(props) {
  let dfd=props?.data?.discountPercentage
  let price=props?.data?.price
  let final= price -(price*(dfd/100))
  
   return (
   <>
   
   <Card
  style={{
    width: '18rem',
   
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {props?.data?.title || "name is not available"}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Rs.{props?.data?.price || "not avai"}
      <h6>Discount:-{dfd}</h6>
      <h6>FinalPrice:-{final}</h6>
    </CardSubtitle>
    <CardText>
     {props?.data?.description || "not avai"}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>

   </>
  )
}
