import { useEffect, useRef, useState } from "react"

export const UseRef = () => {
  const [name, setName] = useState("")
  // const [renderCount, setRenderCount] = useState(1)
  const countRef = useRef(1)
  useEffect(() => {
    // setRenderCount((prev) => prev + 1)
    // countRef.current=countRef.current+1
    countRef.current += 1
  })
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* <p>Render {renderCount} times</p> */}
      <p>Render {countRef.current} times</p>
    </>
  )
}
