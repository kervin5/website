import React from "react"
import MyLogo from "../../images/logo.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`

const SVG = () => {
  return (
    <StyledDiv>
      <MyLogo />
    </StyledDiv>
  )
}

export default SVG
