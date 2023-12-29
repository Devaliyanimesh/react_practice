import React from "react";

import { Card, CardBody, Button } from "reactstrap";

export default function ApiData(props) {
  console.log(props);
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <p>{props?.data?.id}</p>
        <p>{props?.data?.title}</p>
        <p>{props?.data?.price}</p>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
