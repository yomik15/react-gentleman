import { useState } from "react"
import { UseRef, UseRef2, UseRef3 } from "./UseRef"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      <UseRef3 />
    </>
  )
}

export default App
