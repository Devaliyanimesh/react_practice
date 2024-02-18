import React from 'react'
import CountDisplay from './CountDisplay'
import CountUpdate from './CountUpdate'
import { useSelector } from 'react-redux'

export default function Count() {
   
  return (
 <>
 <CountDisplay/>
 <CountUpdate/>
 </>
  )
}
