import { useState } from "react"

export const UseMemo = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = slowFunction(number)

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}
// Simulate complex operation or algorithm function
const slowFunction = (num: number) => {
  console.log("Calling slow function")
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}
