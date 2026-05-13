import { useEffect, useRef, useState } from "react"

export const UseRef3 = () => {
  const [name, setName] = useState("")
  const prevNameRef = useRef("")

  useEffect(() => {
    // set ref in memory with update name but not render component

    prevNameRef.current = name
  })

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {/* prevNameRef.current: get  prevNameRef  in memory, before post render-> set ref with update name(useEffect) */}
        My name is {name} and it used to be {prevNameRef.current}
      </div>
    </>
  )
}
