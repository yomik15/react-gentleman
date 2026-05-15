import { useState } from "react"
import { MessyApp } from "./messy"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MessyApp />
    </>
  )
}

export default App
