import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled.span`
  & > * {
    font-weight: bold;
    display: inline-block;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.lightColor};
    padding: 16px 20px;
    text-decoration: none;
    transition: 100ms;
    border-radius: 8px;
    border: 2px solid "transparent";
    &:hover {
      transform: scale(1.02);
    }
  }

  a {
    &:visited {
      color: ${(props) => props.theme.lightColor};
    }
  }

  &.Outline {
    & > * {
      background-color: transparent;
      color: ${(props) => props.theme.darkColor};
      border: 2px solid ${(props) => props.theme.darkColor};
      &:visited {
        color: ${(props) => props.theme.darkColor};
      }

      &:hover {
      }
    }
  }
`

const Button = ({ as, children, href, outline = false }) => {
  return (
    <StyledButton className={outline ? "Outline" : ""}>
      {as === "a" ? (
        <a to={`${href}`}>{children}</a>
      ) : (
        <button>{children}</button>
      )}
    </StyledButton>
  )
}

Button.defaultProps = { as: "button" }

export default Button
