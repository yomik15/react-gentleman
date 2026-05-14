import { useState } from "react"
import { List } from "./List"

export const UseCallback1 = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const getItems = () => {
    if (!number) return []
    return [number, number + 1, number + 2]
  }
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }

  return (
    <>
      <div style={themeStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Theme toggle
        </button>
        <List getItems={getItems} />
      </div>
    </>
  )
}
