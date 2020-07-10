import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { TweenMax } from "gsap"

const StyledCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.fill};
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

const StyledCircleGroup = styled.div`
  transform-origin: bottom right;
`

const Cricles = ({ position, size, quantity, colors }) => {
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
