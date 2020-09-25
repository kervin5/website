import React from "react"
import ShapesBackgroundTopSVG from "../assets/top-bg-01.svg"
import ShapesBackgroundBottomSVG from "../assets/bottom-bg-01.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .bottomBG {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .topBG {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const SVG = () => {
  return (
    <StyledDiv>
      <ShapesBackgroundTopSVG className="topBG" />
      <ShapesBackgroundBottomSVG className="bottomBG" />
    </StyledDiv>
  )
}

export default SVG
