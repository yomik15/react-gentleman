import { Component } from "react"
import { ThemeContext } from "../ThemeApp.tsx"

export class ClassComponent extends Component {
  themeStyles(dark: boolean) {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "2rem",
      margin: "2rem",
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
        }}
      </ThemeContext.Consumer>
    )
  }
}
