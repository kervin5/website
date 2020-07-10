import React, { useState, memo } from "react"
import styled from "styled-components"
import Circles from "../ui/ornaments/Cricles"

const StyledHeroTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red;
`

const StyledHeader = styled.h1`
  color: black;
  mix-blend-mode: screen;
  position: absolute;
  top: 50%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -6px;
    right: -6px;
    bottom: -52px;
    z-index: -1;
    background: #fff;
  }
`
const randomColors = (quantity) => {
  const colors = []

  for (let i = 0; i < quantity; i++) {
    colors.push(Math.floor(Math.random() * 16777215).toString(16))
  }

  return colors
}

const HeroTitle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const updatePoistion = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const colors = randomColors(4)

  return (
    <StyledHeroTitle onMouseMove={updatePoistion} onTouchMove={updatePoistion}>
      <Circles
        position={position}
        quantity={4}
        size={420}
        colors={["yellow", "red", "blue", "green"]}
      />
      <StyledHeader>Kervin.Tech</StyledHeader>
    </StyledHeroTitle>
  )
}

export default memo(HeroTitle)
