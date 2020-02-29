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
  const isDayTime = hours > 8 && hours < 20
  let userTheme = null
  let themeExpiration = null
  let expired = true

  if (localStorage !== "undefined") {
    userTheme = localStorage.getItem("theme")
    themeExpiration = localStorage.getItem("themeExpiration")
  }
  if (userTheme && themeExpiration) {
    const today = new Date()
    const expiration = new Date(themeExpiration)
    if (today.getTime() <= expiration.getTime()) {
      expired = false
    } else {
      localStorage.removeItem("themeExpiration")
      localStorage.removeItem("theme")
      expired = true
    }
  }
  return userTheme && !expired
    ? getTheme(userTheme)
    : isDayTime
    ? getTheme("light")
    : getTheme("dark")
}

function getTheme(name) {
  return name === "light" ? [name, lightTheme] : [name, darkTheme]
}

function addDays(days) {
  var result = new Date()
  result.setDate(result.getDate() + days)
  return result
}

const CustomThemeProvider = props => {
  const [themeName, themeSettings] = determineTheme()
  const [theme, setTheme] = useState(themeSettings)
  const [currentTheme, setCurrentTheme] = useState(themeName)

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setTheme(darkTheme)
      setCurrentTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme(lightTheme)
      setCurrentTheme("light")
      localStorage.setItem("theme", "light")
    }

    localStorage.setItem("themeExpiration", addDays(1))
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme, currentTheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, CustomThemeProvider }
