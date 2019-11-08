import React from "react"
import SplatSVG from "../../images/splat.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => {
    console.log(props.position)
    return props.position === "right" ? "40vw" : "-10vw"
  }};
  /* overflow: hidden; */

  svg {
    height: 100%;
  }

  path {
    fill: ${props =>
      props.color ? props.theme[props.color] : props.theme.mainColor};
  }
`

const SVG = ({ position = "right" }) => {
  return (
    <StyledDiv position={position}>
      <SplatSVG />
    </StyledDiv>
  )
}

export default SVG
