import React from "react"
import styled from "styled-components"
import useScrollDetector from "scroll-detect-hook"

const StyledPageSection = styled.div`
  background-color: ${props =>
    props.color ? props.theme[props.color] : props.themežclearColor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 100ms;
  .Content {
    position: relative;
    width: 100%;
  }
`

const PageSection = ({ splat, color, children, id }) => {
  const [isScrolling, direction, speed] = useScrollDetector()
  return (
    <StyledPageSection
      color={color}
      className={`PageSection`}
      {...(id ? { id } : {})}
      style={{
        transform: `skewY(${
          isScrolling && direction === "up" ? "" : "-"
        }${speed / 15}deg)`,
      }}
    >
      <div className="Content">{children}</div>
    </StyledPageSection>
  )
}

export default PageSection
