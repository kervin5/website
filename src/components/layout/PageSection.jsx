import React from "react"
import styled from "styled-components"
import Skew from "../Animation/Skew"

const StyledPageSection = styled.div`
  background-color: ${(props) =>
    props.color ? props.theme[props.color] : props.themežclearColor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  will-change: transform;

  .Content {
    width: 100%;
  }
`

const PageSection = ({ color, children, id, skew }) => {
  return skew ? (
    <Skew>
      <StyledPageSection
        color={color}
        className={`PageSection`}
        {...(id ? { id } : {})}
      >
        <div className="Content">{children}</div>
      </StyledPageSection>
    </Skew>
  ) : (
    <StyledPageSection
      color={color}
      className={`PageSection`}
      {...(id ? { id } : {})}
    >
      <div className="Content">{children}</div>
    </StyledPageSection>
  )
}

export default PageSection
