import { useState } from "react"
import { MessyApp } from "./messy"
import { CompoundPatternApp } from "./compound-pattern/CompoundPatternApp"
import { Consumer } from "./compound-pattern2/Consumer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MessyApp /> */}
      {/* <CompoundPatternApp /> */}
      <Consumer />
    </>
  )
}

export default App
