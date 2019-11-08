import React from "react"
import styled from "styled-components"

const StyledPadding = styled.div`
  padding: ${props => props.padding};
  width: 100%;
`

StyledPadding.defaultProps = { padding: "20px" }

const Padding = ({ padding, children }) => {
  return <StyledPadding padding={padding}>{children}</StyledPadding>
}

export default Padding
