import React, { useState } from 'react'
import Inputt from '../01 input/Input'

import TableData from '../InputData/TableData'

export default function Display() {
    let[ref,setRef]=useState(true)
    let refresPage =()=>{
      setRef(!ref)
    }
    console.log(ref);
    return (
        <>
            <Inputt refresPage={refresPage} />
            <TableData data={ref} />

        </>
    )
}
