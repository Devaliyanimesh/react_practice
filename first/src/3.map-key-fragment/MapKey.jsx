import React from 'react'

export default function MapKey() {
    let namerr=["Nimesh","Saif","Latesh","Nayan"]
  return (
    <>    <div >
        {namerr.map((e,i)=>{
            return <div  key={i} > <h1> {i+1}.{e}</h1></div>
        })}
    </div>
    </>

  )
}
