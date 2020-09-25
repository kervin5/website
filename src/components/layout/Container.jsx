import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.maxwidth || props.theme.containerWidth};
`

const Container = (props) => {
  return (
    <StyledContainer maxwidth={props.maxwidth}>
      {props.children}
    </StyledContainer>
  )
}

export default Container
