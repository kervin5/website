import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"

const Theme = props => {
  // const [theme, setTheme] = useState(lightTheme);
  const [theme] = useContext(ThemeContext)
  // let theme = {};

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
