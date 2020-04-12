import React from "react"
import styled from "styled-components"
import SplatSVG from "../../images/splat.svg"
import SocialLinks from "./SocialLinks"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Link } from "gatsby"

const StyledMobileMenuOptions = styled.div`
  position: fixed;
  top: ${props => (props.open ? "0" : "-100vh")};
  left: 0;
  bottom: ${props => (props.open ? "0" : "100vh")};
  right: 0;

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
      color: ${props => props.theme.accentColor};
    }
  }
`

const MobileMenuOptions = ({ items, open, onClick }) => {
  return (
    <StyledMobileMenuOptions open={open} onClick={onClick}>
      <SplatSVG className="SplatSVG" />

      <Grid>
        <Row middle="xs" center="xs">
          {items.map((option, index) => {
            return (
              <Col xs={12} key={option.url + index}>
                <Link to={`${option.url}`}>{option.label}</Link>
              </Col>
            )
          })}

          <Col xs={12}>
            <SocialLinks inverted />
          </Col>
        </Row>
      </Grid>
    </StyledMobileMenuOptions>
  )
}

export default MobileMenuOptions
