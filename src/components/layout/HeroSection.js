import React, { useState, useRef, useContext } from "react"
import styled from "styled-components"
import Circles from "../ui/ornaments/Cricles"
import Skewer from "../ui/Skewer"

const StyledHeroSection = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
`

const StyledHeroContent = styled.div`
  z-index: 0;
  /* cursor: none; */
  min-height: 512px;
`

const StyledHeroBody = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  height: 100vh;
  width: 100%;
  display: flex;
  z-index: 0;
`

const StyledHeroContainer = styled.div`
  padding: 0;
  width: 100%;
`

const StyledHeroHeader = styled.div`
  position: relative;
  contain: layout style;
  text-align: center;
`

const StyledHeroBlender = styled.div`
  color: #000;
  background: #fff;
  mix-blend-mode: screen;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -6px;
    right: -6px;
    bottom: -52px;
    z-index: -1;
    background-color: white;
  }
`

const StyledHeader = styled.h1`
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding: 0.15em;
  margin: -0.15em;
  font-size: 90px;
`

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const container = useRef()
  const updatePoistion = (e) => {
    const yCorrectionFactor = container.current.clientHeight / 2.7

    setPosition({ x: e.clientX, y: e.clientY - yCorrectionFactor })
  }

  return (
    <StyledHeroSection
      onMouseMove={updatePoistion}
      onTouchMove={updatePoistion}
      ref={container}
    >
      <StyledHeroContent>
        <StyledHeroBody>
          <StyledHeroContainer>
            <StyledHeroHeader>
              <Circles position={position} quantity={3} size={420} />
              <StyledHeroBlender>
                <Skewer>
                  <StyledHeader>Kervin</StyledHeader>
                  <br />

                  <StyledHeader>Web Developer</StyledHeader>
                </Skewer>
              </StyledHeroBlender>
            </StyledHeroHeader>
          </StyledHeroContainer>
        </StyledHeroBody>
      </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default HeroSection
