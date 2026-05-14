import { useContext } from "react"
import { ThemeContext } from "../ThemeApp"

export const FunctionComponent2 = () => {
  const darkTheme = useContext(ThemeContext)

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  }

  return <div style={themeStyles}>Function Theme</div>
}
