import { useState } from 'react'
import Usestate1 from './1.Hook/Usestate1'
import UsestateClass from './1.Hook/UsestateClass'
import Two from './2.Props/Function/Two'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   {/* <Usestate1/> */}
   {/* <UsestateClass/> */}
   <Two/>
   
    </>
  )
}

export default App
