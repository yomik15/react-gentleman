import { useState, useMemo, useEffect } from "react"

export const UseMemo3 = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => slowFunction(number), [number])

  // const themeStyles = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   }
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  // [],{},()=>{} refer diff memory allocated
  useEffect(
    () =>
      console.log(
        "ThemeStyles {} recreated, cause {} point diff reference memory allocated",
      ),
    [themeStyles],
  )

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
