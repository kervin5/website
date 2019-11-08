import React from "react"
import styled, { keyframes } from "styled-components"

const typing = keyframes`
 from { width: 0 }
  to { width: 100% }
`

const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: orange; }
`

const StyledSpan = styled.span`
  display: inline-block;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 3.5s steps(40, end),
    ${blinkCaret} 0.75s step-end infinite;
`

const Typewriter = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>
}

export default Typewriter
