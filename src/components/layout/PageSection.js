import React from "react"
import styled from "styled-components"
import Splat from "../svg/splat"
import MorphingSplat from "../svg/morphing-splat"

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

const PageSection = ({ splat, color, children, id }) => {
  return (
    <StyledPageSection
      className={`PageSection`}
      color={color}
      {...(id ? { id } : {})}
    >
      {splat && (
        <MorphingSplat position={typeof splat === "string" ? splat : "right"} />
        // <Splat position={typeof splat === "string" ? splat : "right"} />
      )}
      <div className="Content">{children}</div>
    </StyledPageSection>
  )
}

export default PageSection
