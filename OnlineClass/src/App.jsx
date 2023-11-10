import { useState } from 'react'

function App() {
  const [counter, setcounter] = useState(15)
  const addvalue = () => {
    setcounter(counter + 1)
  }
  const remove = () => {
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>Counter Valeu:{counter}</h1>
      <button onClick={addvalue} >Add Value</button>
      <br />
      <br />
      <button onClick={remove}>remove value</button>
    </>
  )
}
export default App
