import React from "react"
import Button from "../../UI/Button"
import styled from "styled-components"

const StyledHeroLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  & > * {
    padding: 20px;
  }
`

const HeroLinks = () => {
  return (
    <StyledHeroLinks>
      <Button as="a" href="/#aboutMe">
        About Me
      </Button>

      <Button as="a" href="/#contact" outline>
        Contact
      </Button>
    </StyledHeroLinks>
  )
}

export default HeroLinks
