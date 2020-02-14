import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MorphReplace } from "react-svg-morph"
import SplatSVG from "../../images/splat.svg"
import SplatReverseSVG from "../../images/splat-reverse.svg"

const StyledDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => (props.position === "right" ? "40vw" : "-10vw")};
  /* overflow: hidden; */

  svg {
    height: 100% !important;
    width: auto !important;
  }

  path {
    fill: ${props =>
      props.color ? props.theme[props.color] : props.theme.mainColor};
  }
`

const SVG = ({ position = "right" }) => {
  const [reversed, setReversed] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setReversed(reversed => !reversed)
    }, 8000)
    return () => clearInterval(interval)
  }, [])
  return (
    <StyledDiv position={position} className="MorphingSVG">
      <MorphReplace rotation="none" height="100%" duration={6000}>
        {reversed ? (
          <SplatReverseSVG key="perro" />
        ) : (
          <SplatSVG key="perrote" />
        )}
      </MorphReplace>
    </StyledDiv>
  )
}

export default SVG
