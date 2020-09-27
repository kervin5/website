import React from "react"
import styled from "styled-components"
import Skew from "../Animation/Skew"

const StyledPageSection = styled.div`
  background-color: ${(props) => {
    console.log(props.color)
    console.log(props.color ? props.theme[props.color] : props.theme.clearColor)
    return props.color ? props.theme[props.color] : props.theme.clearColor
  }};
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
  return (
    <StyledPageSection
      color={color}
      className={`PageSection`}
      {...(id ? { id } : {})}
    >
      {skew ? (
        <Skew>
          <div className="Content">{children}</div>{" "}
        </Skew>
      ) : (
        <div className="Content">{children}</div>
      )}
    </StyledPageSection>
  )
}

export default PageSection
