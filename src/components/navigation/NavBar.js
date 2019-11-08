import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import NavBarLogo from "./NavBarLogo"
import Menu from "./Menu"
import useScrollHandler from "../../lib/scroll"

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props =>
    props.scroll ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  box-shadow: ${props =>
    props.scroll ? "none" : "-1px 2px 5px -3px rgba(0,0,0,0.52)"};
  z-index: 999;
  padding: 10px;
  transition: 300ms;
`

const NavBar = () => {
  const scroll = useScrollHandler()

  return (
    <StyledNavBar scroll={scroll}>
      <Grid>
        <Row middle="xs" between="xs">
          <Col xs={6}>
            <NavBarLogo />
          </Col>
          <Col xs={6}>
            <Menu />
          </Col>
        </Row>
      </Grid>
    </StyledNavBar>
  )
}

export default NavBar
