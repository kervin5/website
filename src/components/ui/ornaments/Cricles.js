import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { TweenMax } from "gsap"

const StyledCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.theme[props.fill]};
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  will-change: transform;
`

const StyledCircleGroup = styled.div`
  transform-origin: bottom right;
  display: block;
  contain: strict;
  position: absolute;
  top: -10px;
  left: -5px;
  right: -5px;
  bottom: -50px;
  overflow: hidden;
  background: ${(props) => props.theme.darkColor};
`
const colors = ["accentColor2", "accentColor3", "mainColor"]

const Cricles = ({ position, size, quantity }) => {
  let cardRef = useRef([])
  const reductionFactor = size / quantity
  const circles = []

  for (let i = 0; i < quantity; i++) {
    circles.push(
      <StyledCircle
        ref={(element) => {
          cardRef.current[i] = element
        }}
        size={size - reductionFactor * i}
        fill={colors[i]}
        key={"Circle" + i}
      />
    )
  }

  useEffect(() => {
    // testimonial animation
    TweenMax.to(cardRef.current, 1, {
      x: position.x,
      y: position.y,
      stagger: -0.02,
    })
  }, [position])
  return <StyledCircleGroup>{circles}</StyledCircleGroup>
}

export default Cricles
