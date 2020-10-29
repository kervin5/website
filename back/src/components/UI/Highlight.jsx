import React from "react"
import styled from "styled-components"

const StyledHighlight = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.mainColor};
`

const Highlight = ({ children }) => {
  return <StyledHighlight>{children}</StyledHighlight>
}

export default Highlight
