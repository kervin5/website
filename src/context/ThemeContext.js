import React, { useState } from "react"

const ThemeContext = React.createContext([{}, () => {}])

const lightTheme = {
  name: "light",
  mainColor: "#ffcc00",
  secondaryColor: "#F45A2C",
  accentColor: "#07538C",
  accentColor2: "#00AAB5",
  darkColor: "black",
  lightColor: "white",
  containerWidth: "1130px",
}

const darkTheme = {
  name: "dark",
  mainColor: "#B79200",
  secondaryColor: "#A84346",
  accentColor: "#07538C",
  accentColor2: "#00AAB5",
  darkColor: "#ebf7fc",
  lightColor: "#25283D",
  mutedColor: "#2a2e4d",
  containerWidth: "1130px",
}

function determineTheme() {
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20
  console.log(isDayTime)
  return isDayTime ? ["light", lightTheme] : ["dark", darkTheme]
}

const CustomThemeProvider = props => {
  const [themeName, themeSettings] = determineTheme()
  const [theme, setTheme] = useState(themeSettings)
  const [currentTheme, setCurrentTheme] = useState(themeName)

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setTheme(darkTheme)
      setCurrentTheme("dark")
    } else {
      setTheme(lightTheme)
      setCurrentTheme("light")
    }
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme, currentTheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, CustomThemeProvider }
