import React from 'react'
import ImgUrl from '../assets/logo.svg'

import { MDBIcon } from 'mdb-react-ui-kit'
import { Button } from 'reactstrap'


export default function Nav() {
  return (
    <>
      <div className='d-flex gap-5 align-items-center '>
        <div className="Logo" color='danger'>
          <img src={ImgUrl} alt="" />
        </div>
        <div className="input w-25 ">
          <input type="sarch" className='w-100' />
        </div>
        <div className="Login d-flex align-items-center ">
          <Button style={{ backgroundColor: "white" }}>
            <MDBIcon fas icon="user-alt" />
            <span style={{ marginLeft: "10px" }}>User</span>
          </Button>



        </div>
      </div>


    </>
  )
}
