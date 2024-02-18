import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import {incone} from '../../Redux/Feture/count'
import {amounthand} from './../../Redux/Feture/Amount'


export default function CountUpdate() {
    let dispacthfun=useDispatch()
    let dispacthfunn=useDispatch()

  return (
    <>
    <Button onClick={()=>dispacthfun(incone())}>Icrement</Button>
    <Button onClick={()=>dispacthfunn(amounthand())}>Icrement</Button>

    </>
  )
}
