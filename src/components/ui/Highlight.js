import React from "react"
import styled from "styled-components"

const StyledHighlight = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.accentColor3};
`

const Highlight = ({ children }) => {
  return <StyledHighlight>{children}</StyledHighlight>
}

export default Highlight
