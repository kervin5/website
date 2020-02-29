import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
import SoonMoonSVG from "../svg/sun-moon"

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  float: right;
  position: relative;
  z-index: 100;

  path {
    fill: ${props => props.theme.darkColor};
  }

  &:focus {
    outline: none;
  }
`

const ThemeToggle = ({ children }) => {
  const [theme, toggleTheme, current] = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme()
  }
  return (
    <StyledButton onClick={handleClick}>
      <SoonMoonSVG light={current === "light"} />
    </StyledButton>
  )
}

export default ThemeToggle
