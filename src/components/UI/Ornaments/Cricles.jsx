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
  background: ${(props) =>
    props.theme.name === "light"
      ? props.theme.darkColor
      : props.theme.mainColor};
  transition: 300ms;

  /* background: linear-gradient(
    45deg,
    #1a22bd 12.5%,
    #2128bd 12.5%,
    #2128bd 37.5%,
    #1a22bd 37.5%,
    #1a22bd 62.5%,
    #2128bd 62.5%,
    #2128bd 87.5%,
    #1a22bd 87.5%
  );
  background-size: 300px 300px;
  background-position: 50px 50px;
 */
`
const colors = ["mainColor", "mutedColor", "accentColor1"]

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
  return <StyledCircleGroup className="Circles">{circles}</StyledCircleGroup>
}

export default Cricles
