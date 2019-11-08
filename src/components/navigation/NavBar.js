import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "../layout/Container"

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 999;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <Container>Hi</Container>
    </StyledNavBar>
  )
}

export default NavBar
