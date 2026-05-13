import { useRef, useState } from "react"

export const UseRef2 = () => {
  const [name, setName] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  function inputRefHdl() {
    if (!inputRef.current) {
      console.log("Dont exist reference to input")
      return
    }

    console.log(inputRef.current)

    // inputRef.current?.focus()
    inputRef.current.focus()

    // inputRef.current?.value = "some text"
    inputRef.current.value = "Some Text"
  }
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={inputRefHdl}>Focus on Input</button>
    </>
  )
}
