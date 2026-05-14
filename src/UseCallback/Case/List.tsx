import { useEffect, useState } from "react"

interface Props {
  getItems: () => number[]
}
export const List = ({ getItems }: Props) => {
  const [items, setItems] = useState(getItems())

  useEffect(() => {
    console.log("getItems updated")
    setItems(getItems())
  }, [getItems])
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
