import React from "react"
import styled from "styled-components"

const StyledNavBarLogo = styled.a`
  font-weight: bold;

  span {
    color: ${props => props.theme.secondaryColor};
  }
`

const NavBarLogo = () => {
  return (
    <StyledNavBarLogo>
      kervin<span>.tech</span>
    </StyledNavBarLogo>
  )
}

export default NavBarLogo
