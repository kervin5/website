import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavBarLogo = styled.span`
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.darkColor};
    transition: 300ms;
    &:hover {
      color: ${(props) => props.theme.mainColor};

      span {
        color: ${(props) => props.theme.darkColor};
      }
    }
  }

  span {
    color: ${(props) => props.theme.mainColor};
    transition: 300ms;
  }
`

const NavBarLogo = () => {
  return (
    <StyledNavBarLogo>
      <Link to={`/#home`}>
        kervin<span>.tech</span>
      </Link>
    </StyledNavBarLogo>
  )
}

export default NavBarLogo
