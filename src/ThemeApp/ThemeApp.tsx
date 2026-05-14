import { useState, createContext } from "react"
import { ClassComponent, FunctionComponent2 } from "./components"

export const ThemeContext = createContext(false)

function ThemeApp() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* <FunctionComponent /> */}
        <FunctionComponent2 />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeApp
