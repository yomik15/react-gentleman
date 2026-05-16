import { useState } from "react"
import { MessyApp } from "./messy"
import { CompoundPatternApp } from "./compound-pattern/CompoundPatternApp"
import { Consumer } from "./compound-pattern2/Consumer"
import { Consumer2 } from "./compound-pattern3/Consumer2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MessyApp /> */}
      {/* <CompoundPatternApp /> */}
      {/* <Consumer /> */}
      <Consumer2 />
    </>
  )
}

export default App
