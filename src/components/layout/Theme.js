import React from "react"
import { ThemeProvider } from "styled-components"

export const theme = {
  mainColor: "#ffcc00",
  secondaryColor: "#F45A2C",
  accentColor: "#07538C",
  accentColor2: "#00AAB5",
  darkColor: "black",
  lightColor: "white",
  containerWidth: "1130px",
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
