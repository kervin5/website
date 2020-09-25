import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import NavBarLogo from "./NavBarLogo"
import Menu from "./Menu"
import useScrollHandler from "../../lib/scroll"
// import ThemeToggle from "../UI/ThemeToggle"

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.scroll ? "rgba(255,255,255,0)" : props.theme.lightColor};
  box-shadow: ${(props) =>
    props.scroll ? "none" : "-1px 2px 5px -3px rgba(0,0,0,0.52)"};
  z-index: 999;
  padding: 10px;
  transition: 300ms;

  .ActionButtons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const NavBar = () => {
  const scroll = useScrollHandler()

  return (
    <StyledNavBar scroll={scroll}>
      <Grid>
        <Row middle="xs" between="xs">
          <Col xs={5}>
            <NavBarLogo />
          </Col>
          <Col xs={7} className="ActionButtons">
            {/* <ThemeToggle /> */}
            <Menu />
          </Col>
        </Row>
      </Grid>
    </StyledNavBar>
  )
}

export default NavBar
