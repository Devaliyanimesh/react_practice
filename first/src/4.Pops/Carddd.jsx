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
    let one=  price-(price*(discout/100))
    let final=one.toFixed(2)
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
            className="mb-2 text-muted d-flex"
            tag="h6"
          >
          <p> <i class="bi bi-badge-4k"></i>&#8377;{final ?? price } </p>
          <p className='px-2 'style={{textDecoration:"line-through"}}> &#8377;{props?.data?.price }</p>
          <p style={{color:"green"}}>{discout ||"discount not availabel"}% OFF</p>
          
          </CardSubtitle>
          <CardText style={{}}>
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
    
 