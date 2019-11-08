import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.maxWidth || props.theme.containerWidth};
`

const Container = props => {
  return (
    <StyledContainer maxWidth={props.maxWidth}>
      {props.children}
    </StyledContainer>
  )
}

export default Container
