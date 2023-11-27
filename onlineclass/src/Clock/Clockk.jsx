import React from 'react'

export default function Clockk() {
    let time=new Date()
  return (
<>
<center>
<p>Current time is {time.toDateString()} {time.toLocaleTimeString()}</p>
</center>

</>
  )
}
