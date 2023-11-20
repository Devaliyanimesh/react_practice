import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export default function One(props) {
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
