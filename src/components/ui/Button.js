import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled.span`
  & > * {
    display: inline-block;
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.lightColor};
    padding: 10px;
    text-decoration: none;
    transition: 100ms;
    border-radius: 5px;
    &:hover {
      transform: scale(1.02);
    }
  }

  a {
    &:visited {
      color: ${props => props.theme.lightColor};
    }
  }
`

const Button = ({ as, children, href }) => {
  return (
    <StyledButton>
      {as === "a" ? (
        <Link to={`${href}`}>{children}</Link>
      ) : (
        <button>{children}</button>
      )}
    </StyledButton>
  )
}

Button.defaultProps = { as: "button" }

export default Button
