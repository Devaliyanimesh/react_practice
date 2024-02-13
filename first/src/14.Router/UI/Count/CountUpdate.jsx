import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import {incone} from '../../Redux/Feture/count'
import {intten} from '../../Redux/Feture/count'


export default function CountUpdate() {
    let dispacthfun=useDispatch()
  return (
    <>
    <Button onClick={()=>dispacthfun(incone())}>Icrement</Button>
    <Button onClick={()=>dispacthfun(intten())}>Icrement</Button>

    </>
  )
}
