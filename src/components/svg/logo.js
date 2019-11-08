import React from "react"
import MyLogo from "../../images/logo.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  svg {
    path {
      transition: 3s;
      &:hover {
        fill: ${props => props.theme.secondaryColor};
      }
    }
  }
`

const SVG = () => {
  return (
    <StyledDiv>
      <MyLogo />
    </StyledDiv>
  )
}

export default SVG
