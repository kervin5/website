import React from "react"
import { Link } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

const StyledDesktopMenuOptions = styled.div`
  a {
    color: ${(props) => props.theme.darkColor};
    font-weight: bold;
    font-size: 1em;
    transition: 200ms;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px;
    border-radius: 25px;
    &:hover {
      background-color: ${(props) => props.theme.mainColor};
      color: ${(props) => props.theme.darkColor};
      padding: 10px;
    }
  }
`

const DesktopMenuOptions = ({ items }) => {
  return (
    <StyledDesktopMenuOptions>
      <Grid>
        <Row middle="xs" center="xs">
          {items.map((option, index) => {
            return (
              <Col xs key={option.url + index}>
                <Link to={`${option.url}`}>{option.label}</Link>
              </Col>
            )
          })}
        </Row>
      </Grid>
    </StyledDesktopMenuOptions>
  )
}

export default DesktopMenuOptions
