// patch global Usa IDs reales en vez de contar:
const _set = window.setInterval
const _clear = window.clearInterval

const active = new Set()

window.setInterval = (...a) => {
  const id = _set(...a)
  active.add(id)
  console.log("➕ setInterval | activos:", active.size)
  return id
}
window.clearInterval = (id) => {
  if (!active.has(id)) {
    console.log("⚠️ clear duplicado:", id)
  } else {
    active.delete(id)
  }
  console.log("🗑 activos:", active.size)

  return _clear(id)
}

import { useState, useEffect } from "react"
export const UpdaterState = () => {
  // 1. hooks
  // useState sync estado con renders
  const [n, setN] = useState(0)

  const setIntervalUpdaterState = () => {
    // updaterState prev => prev + 1
    const id = setInterval(() => {
      console.log("tick con n=", n)
      setN((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(id)
  }

  // ⚡ Qué cambia
  // solo 1 intervalo
  // no hay race entre renders
  // no hay closures stale
  // no hay acumulación de efectos
  // cleanId solo se llama en el unmount

  useEffect(setIntervalUpdaterState, [])
  // 2.logica/calculos/ debug

  // 3. render
  // console.log version debug de return
  console.log("🔄 render — timer:", n) // ← aquí

  // 3. return la version ui de lo que React va pintar
  return <>{n}</>
}
