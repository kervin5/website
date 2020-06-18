import React from "react"
import PersonIllustration from "../envelope.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`

const SVG = () => {
  return (
    <StyledDiv>
      <PersonIllustration />
    </StyledDiv>
  )
}

export default SVG
