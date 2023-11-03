import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'

// export default function Carddd(props) {
//   return (
//     <>
//     <Card
//     style={{
//       width: '18rem',
//       margin:"10px",
      
//     }}
//   >
//     <img
//       alt="Sample"
//       src="https://picsum.photos/300/200"
//     />
//     <CardBody>
//       <CardTitle tag="h5">
//        {props.name}
//       </CardTitle>
//       <CardSubtitle
//         className="mb-2 text-muted"
//         tag="h6"
//       >
//       Rs. {props.price}/
//       </CardSubtitle>
//       <CardText>
//         {props.discriptionn}
//       </CardText>
//       <Button>
//         Button
//       </Button>
//     </CardBody>
//   </Card>

//     </>
//   )
// }

// without object
export default function Carddd(props) {
    let discout=props.data.discountPercentage
    let price=props.data.price
    let final=  price*discoun
    // console.log(" final:", final)
    
    
      return (
        <>
        <Card
        style={{
          width: '18rem',
          margin:"10px",
          
        }}
      >
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5">
           {props?.data?.title || "Title unavilable"}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          Rs. {props?.data?.price }/
          
          <p>After di:-{final}</p>
          </CardSubtitle>
          <CardText>
            {props?.data?.description}
          </CardText>
          <Button className='bg-danger w-100 border-0'>
            Button
          </Button>
        </CardBody>
      </Card>
    
        </>
      )
    }
    
 