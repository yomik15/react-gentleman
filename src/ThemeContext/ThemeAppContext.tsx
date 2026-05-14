import { useState, createContext } from "react"
import { FunctionComponent } from "./components"
import { ThemeProvider } from "./context/ThemeContext"
// export const ThemeContext = createContext(false)

function ThemeAppContext() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  return (
    <>
      <ThemeProvider>
        {/* <ThemeContext.Provider value={darkTheme}> */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponent />
        {/* </ThemeContext.Provider> */}
      </ThemeProvider>
    </>
  )
}

export default ThemeAppContext
