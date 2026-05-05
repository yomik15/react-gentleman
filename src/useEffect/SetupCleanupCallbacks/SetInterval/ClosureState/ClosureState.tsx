// patch global cuenta cuantos setup hay activos y cuantos cleanup de activos se limpian
let count = 0
const _set = window.setInterval
const _clear = window.clearInterval
window.setInterval = (...a) => {
  const id = _set(...a)
  count++
  console.log("➕ setInterval | activos:", count, "| id:", id)
  return id
}
window.clearInterval = (id) => {
  count--
  console.log("🗑 clearInterval | activos:", count, "| id:", id)
  return _clear(id)
}

import { useState, useEffect } from "react"

export const ClosureState = () => {
  // 1. hooks
  // useState sync estado con renders
  const [n, setN] = useState(0)

  const setIntervalClosureState = () => {
    // closure state: time + 1
    const id = setInterval(() => {
      console.log("⏱  tick con n=", n)
      setN(n + 1)
    }, 1000)

    return () => {
      clearInterval(id)
      console.log("🗑 clearInterval | activos:", count)
    }
  }

  // side effect - despues de cada render

  // caso01 setIntervalClosureState

  // ❌ deps: [] — cleanup solo en unmount, intervalos se acumulan
  // useEffect(setIntervalClosureState, [])

  // ✅ deps: [timer] - cleanup corre ANTES de cada nuevo effect
  useEffect(setIntervalClosureState, [n])

  // 2.logica/calculos/ debug

  // 3. render
  // console.log version debug de return
  console.log("🔄 render — timer:", n) // ← aquí

  // 3. return la version ui de lo que React va pintar
  return <>{n}</>
}
