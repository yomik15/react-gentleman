import React from "react"
import { useState, createContext, useContext } from "react"

// Contexts
export const ThemeContext = createContext(false)
export const ToggleThemeContext = createContext(() => {})

// Consumers Hooks Context
export const useTheme = () => useContext(ThemeContext)

export const useToggleTheme = () => useContext(ToggleThemeContext)

// Provider Props Component Jsx Context
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
