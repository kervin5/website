import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  width: 100%;
  margin-top: 30px;
`

const Footer = () => {
  return (
    <StyledFooter>
      © Copyright {new Date().getFullYear()}, Kervin Vasquez
    </StyledFooter>
  )
}

export default Footer
