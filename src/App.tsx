import { useState } from "react"
import { MessyApp } from "./messy"
import { CompoundPatternApp } from "./compound-pattern/CompoundPatternApp"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MessyApp /> */}
      <CompoundPatternApp />
    </>
  )
}

export default App
