import React from "react"
import styled from "styled-components"

const StyledHeroDiv = styled.div`
  position: relative;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: auto;
  }
`

const Hero = ({ src, alt }) => {
  return (
    <StyledHeroDiv className="Hero">
      <img src={src} alt={alt} />
    </StyledHeroDiv>
  )
}

export default Hero
