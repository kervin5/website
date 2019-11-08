import React from "react"
import SplatSVG from "../../images/splat.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40vw;
  overflow: hidden;

  svg {
    height: 100%;
  }

  path {
    fill: ${props =>
      props.color ? props.theme[props.color] : props.theme.mainColor};
  }
`

const SVG = () => {
  return (
    <StyledDiv>
      <SplatSVG />
    </StyledDiv>
  )
}

export default SVG
