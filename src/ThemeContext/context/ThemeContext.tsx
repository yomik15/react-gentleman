import React from "react"
import { useState, createContext } from "react"

export const ThemeContext = createContext(false)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  // const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  return (
    <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
  )
}
