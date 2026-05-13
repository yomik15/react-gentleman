import { useState, useMemo } from "react"

export const UseMemo2 = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // useMemo(()=>fn(),[deps]) ejecuta fn(): valor, recalcula valor costoso solo cuando cambian las deps
  const doubleNumber = useMemo(() => slowFunction(number), [number])

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
// Simulate complex algorithm function
const slowFunction = (num: number) => {
  console.log("Calling slow function")
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}
