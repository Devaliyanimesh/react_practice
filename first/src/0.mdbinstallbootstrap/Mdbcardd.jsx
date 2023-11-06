
import { Airplay } from 'lucide-react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit'
import React from 'react'

export default function Mdbcardd() {
  return (
    <MDBCard className='w-25'>
    <MDBCardImage className='' position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
    </MDBCardBody>
    <MDBListGroup flush>
      <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
      <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
      <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
    </MDBListGroup>
    <MDBCardBody>
      <MDBCardLink href='#'>Card link</MDBCardLink>
      <MDBCardLink href='#'>Card link</MDBCardLink>
     
    </MDBCardBody>
  </MDBCard>
  )
}
