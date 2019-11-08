import React from "react"
import styled from "styled-components"
import Splat from "../svg/splat"

const StyledPageSection = styled.div`
  background-color: ${props =>
    props.color ? props.theme[props.color] : props.theme.clearColor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .Content {
    position: relative;
    width: 100%;
  }
`

const PageSection = props => {
  return (
    <StyledPageSection className={`PageSection`} color={props.color}>
      {props.splat && <Splat />}
      <div className="Content">{props.children}</div>
    </StyledPageSection>
  )
}

export default PageSection
