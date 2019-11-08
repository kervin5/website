import React from "react"
import { ThemeProvider } from "styled-components"

export const theme = {
  mainColor: "#ffcc00",
  secondaryColor: "#ff546c",
  darkColor: "black",
  lightColor: "white",
  containerWidth: "960px",
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
