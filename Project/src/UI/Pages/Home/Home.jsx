import React from 'react'
import img1 from './../../../Images/discount.webp'
import Collection from '../List/Collection'

export default function Home() {
  return (<>
    <img src={img1} alt="" className='w-100' />
    <Collection/>
    </>
  )
}
