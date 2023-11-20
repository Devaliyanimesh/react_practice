import React from 'react'
import One from './One'
import Json from './../../0.Datafile/Packesge.json'

export default function Two() {
  return (
 <>
 <div style={{
  margin:'0px 40px',
  padding:'10px',
  gap:'10px',
  display:'flex',
  flexWrap:'wrap'
 }}>
{Json.map((e)=>{

  return <One  data={e}/>
})}
</div>
 </>
  )
}
