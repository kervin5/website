import React from "react"
import styled from "styled-components"
import SocialLinks from "./SocialLinks"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Link } from "gatsby"

const StyledMobileMenuOptions = styled.div`
  position: fixed;
  top: ${(props) => (props.open ? "0" : "-100vh")};
  left: 0;
  bottom: ${(props) => (props.open ? "0" : "100vh")};
  right: 0;
  transition: 300ms;

  &::before {
    content: "";
    display: block;
    position: absolute;

    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.mainColor};
  }

  @media (max-width: 845px) {
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
    color: ${(props) => props.theme.lightColor};
    font-weight: bold;
    font-size: 1.4em;
    transition: 200ms;
    text-decoration: none;
    &:hover {
      font-size: 1.5em;
      color: ${(props) => props.theme.accentColor1};
    }
  }
`

const MobileMenuOptions = ({ items, open, onClick }) => {
  return (
    <StyledMobileMenuOptions open={open} onClick={onClick}>
      <Grid>
        <Row middle="xs" center="xs">
          {items.map((option, index) => {
            return (
              <Col xs={12} key={option.url + index}>
                {option?.external ? <a href={`${option.url}`}>{option.label}</a> : <Link to={`${option.url}`}>{option.label}</Link>}
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
