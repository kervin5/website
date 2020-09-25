import React, { useState, useRef } from "react"
import styled from "styled-components"
import Circles from "../UI/Ornaments/Cricles"
import Skew from "../Animation/Skew"
import SlideUp from "../Animation/SlideUp"
import ShapesBackground from "../../images/SVGComponents/ShapesBakground"
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
    bottom: -52px;
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
  font-size: 90px;
  transform: translate3d(0, 0, 0);
  font-size: ${(props) => props.fontSize ?? "20rem"};
  &::selection {
    background-color: ${(props) => props.theme.accentColor1};
    color: ${(props) => props.theme.lightColor};
  }

  @media (max-width: 920px) {
    font-size: 10rem;
  }
`

const HeroSection = ({ firstLine, secondLine }) => {
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
      {/*<Shapes duration={2} repeat /> */}
      {/* <Shapes duration={8} repeat /> */}
      {/* <Shapes delay={4} duration={8} repeat /> */}
      {/* <Shapes duration={32} repeat /> */}
      {/* <Shapes duration={32} delay={16} repeat /> */}
      <SlideUp>
        <StyledHeroContent>
          <StyledHeroBody>
            <StyledHeroContainer>
              <StyledHeroHeader>
                <Circles position={position} quantity={3} size={420} />
                <StyledHeroBlender>
                  <Skew>
                    <StyledHeader>{firstLine}</StyledHeader>
                    {/* <br />
                    <StyledHeader fontSize={"5rem"}>{secondLine}</StyledHeader> */}
                  </Skew>
                </StyledHeroBlender>
              </StyledHeroHeader>
            </StyledHeroContainer>
          </StyledHeroBody>
        </StyledHeroContent>
      </SlideUp>
      <ShapesBackground />
    </StyledHeroSection>
  )
}

export default HeroSection
