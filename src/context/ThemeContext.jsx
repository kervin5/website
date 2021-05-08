import React, { useState } from "react"

const ThemeContext = React.createContext([{}, () => {}])

const lightTheme = {
  name: "light",
  mainColor: "#ff7d63",
  accentColor1: "#f5ebf2",
  darkColor: "#27437d",
  lightColor: "white",
  containerWidth: "1130px",
  mutedColor: "#E9D8D8",
  mutedBgColor: "#F8F8F8",

  //algolia
  foreground: "#050505",
  background: "white",
  faded: "#888",
}

const darkTheme = {
  name: "dark",
  mainColor: "#ffcc00",
  accentColor1: "#A84346",
  accentColor2: "#07538C",

  darkColor: "#ebf7fc",
  lightColor: "#25283D",
  mutedColor: "#2a2e4d",
  containerWidth: "1130px",
  //algolia
  foreground: "#050505",
  background: "white",
  faded: "#888",
}

function determineTheme() {
  // const hours = new Date().getHours()
  // const isDayTime = hours > 8 && hours < 20
  // let userTheme = null
  // let themeExpiration = null
  // let expired = true

  // if (typeof window !== "undefined") {
  //   userTheme = localStorage.getItem("theme")
  //   themeExpiration = localStorage.getItem("themeExpiration")
  // }
  // if (userTheme && themeExpiration) {
  //   const today = new Date()
  //   const expiration = new Date(themeExpiration)
  //   if (today.getTime() <= expiration.getTime()) {
  //     expired = false
  //   } else {
  //     localStorage.removeItem("themeExpiration")
  //     localStorage.removeItem("theme")
  //     expired = true
  //   }
  // }
  // return userTheme && !expired
  //   ? getTheme(userTheme)
  //   : isDayTime
  //   ? getTheme("light")
  //   : getTheme("dark")
  return getTheme("light")
}

function getTheme(name) {
  return name === "light" ? [name, lightTheme] : [name, darkTheme]
}

function addDays(days) {
  var result = new Date()
  result.setDate(result.getDate() + days)
  return result
}

const CustomThemeProvider = (props) => {
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
