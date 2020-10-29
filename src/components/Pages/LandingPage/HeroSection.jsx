import React, { useState, useRef } from "react"
import styled from "styled-components"
import Circles from "../../UI/Ornaments/Cricles"
// import Stripes from "../../UI/Ornaments/Stripes"
import Skew from "../../Animation/Skew"
import SlideUp from "../../Animation/SlideUp"

// import Shapes from "../../images/SVGComponents/Shapes"

const StyledHeroSection = styled.div`
  position: relative;
  z-index: 2;
  /* overflow: hidden; */
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
  display: flex;
  z-index: 0;
`

const StyledHeroContainer = styled.div`
  padding: 0;
  width: 100%;
  /* &:hover {
    .Stripes {
     
    }
  }

  &:not(:hover) {
    .Circles {
      background-color: red;
    }
  } */
`

const StyledHeroHeader = styled.div`
  position: relative;
  contain: layout style;
  text-align: center;
  /* &:hover {
    .Circles {
      background: red;
    }
  } */
`

const StyledHeroBlender = styled.div`
  color: ${(props) => (props.theme.name === "light" ? "#000" : "#fff")};
  background: ${(props) => props.theme.lightColor};
  mix-blend-mode: ${(props) =>
    props.theme.name === "light" ? "screen" : "darken"};
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -6px;
    right: -6px;
    bottom: -520px;
    z-index: -1;
    background-color: ${(props) => props.theme.lightColor};
  }
`

const StyledHeader = styled.h1`
  position: relative;
  display: inline-block;
  /* overflow: hidden; */
  transition: 300ms;
  vertical-align: top;
  padding: 0.15em;
  margin: -0.15em;
  font-weight: 900;
  transform: translate3d(0, 0, 0);
  font-size: ${(props) => props.fontSize ?? "15rem"};
  &::selection {
    background-color: ${(props) => props.theme.accentColor1};
    color: ${(props) => props.theme.lightColor};
  }

  @media (max-width: 920px) {
    font-size: 10rem;
  }
`

const StyledChildren = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  flex-direction: column;
`

const HeroSection = ({ firstLine, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const container = useRef()
  const updatePoistion = (e) => {
    const yCorrectionFactor = container.current.clientHeight / 3.5

    setPosition({ x: e.clientX, y: e.clientY - yCorrectionFactor })
  }

  return (
    <StyledHeroSection
      onMouseMove={updatePoistion}
      onTouchMove={updatePoistion}
      ref={container}
    >
      {/* <Shapes duration={2.5} /> */}

      {/* <Shapes duration={32} repeat /> */}
      {/* <Shapes duration={32} delay={16} repeat /> */}
      <SlideUp>
        <StyledHeroContent>
          <StyledHeroBody>
            <StyledHeroContainer>
              <StyledHeroHeader>
                {/* <Stripes quantity={4} size={420} /> */}
                <Circles position={position} quantity={3} size={420} />

                <StyledHeroBlender>
                  <Skew>
                    <StyledHeader>{firstLine}</StyledHeader>

                    {/* <StyledHeader fontSize={"5rem"}>{secondLine}</StyledHeader> */}
                  </Skew>
                </StyledHeroBlender>
                {children && <StyledChildren>{children}</StyledChildren>}
              </StyledHeroHeader>
            </StyledHeroContainer>
          </StyledHeroBody>
        </StyledHeroContent>
      </SlideUp>
    </StyledHeroSection>
  )
}

export default HeroSection
