import { useContext } from "react"
import {
  ThemeContext,
  useTheme,
  useToggleTheme,
} from "../context/ThemeContext.tsx"

export const FunctionComponent = () => {
  // const darkTheme = useContext(ThemeContext)
  const darkTheme = useTheme()

  const toggleTheme = useToggleTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  }

  // return <div style={themeStyles}>Function Theme</div>
  return (
    <>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}
