import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"
import HamburgerToggle from "./HamburgerToggle"
import SplatSVG from "../../images/splat.svg"
import SocialLinks from "./SocialLinks"

const StyledMenu = styled.div``

const StyledMenuOptions = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.open ? "0" : "120vw")};
  bottom: 0;
  right: ${props => (props.open ? "0" : "-120vw")};

  .SplatSVG {
    transform: ${props => (props.open ? "scale(3)" : "scale(0)")};
    transition: 400ms;
    animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);

    path {
      fill: ${props =>
        props.color ? props.theme[props.color] : props.theme.secondaryColor};
    }
  }

  @media (max-width: 845px) {
    .SplatSVG {
      transform: ${props => (props.open ? "scale(10)" : "scale(0)")};
      transition: 300ms;
    }
  }

  .container {
    position: absolute;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .row {
      height: 100%;
    }
  }

  a {
    color: ${props => props.theme.lightColor};
    font-weight: bold;
    font-size: 1.4em;
    transition: 200ms;
    text-decoration: none;
    &:hover {
      font-size: 1.5em;
    }
  }
`

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledMenu>
      <HamburgerToggle toggle={setOpen} open={open} />
      <StyledMenuOptions open={open} onClick={() => setOpen(!open)}>
        <SplatSVG className="SplatSVG" />

        <Grid>
          <Row middle="xs" center="xs">
            {[
              { label: "Home", id: "home" },
              { label: "About Me", id: "aboutMe" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((option, index) => {
              return (
                <Col xs={12} key={option.id + index}>
                  <Link to={`/#${option.id}`}>{option.label}</Link>
                </Col>
              )
            })}

            <Col xs={12}>
              <SocialLinks inverted />
            </Col>
          </Row>
        </Grid>
      </StyledMenuOptions>
    </StyledMenu>
  )
}

export default Menu
