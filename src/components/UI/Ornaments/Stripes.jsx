import React from "react"
import styled, { keyframes } from "styled-components"

const moveUp = keyframes`{
	from {
		transform: scale(0);
	}

	to {
		transform: scale(20);
	}
}`

const StyledStripe = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${(props) => props.theme[props.fill]};
  position: absolute;
  transform: scale(0);
  /* transform: translate(-50%, -50%); */
  bottom: 50%;
  left: 40%;
  right: 50%;
  top: 50%;
  will-change: transform;
  border-radius: 50%;
  animation: ${moveUp} 1s ease-in ${(props) => (props.position + 1) * 1}s
    forwards;
  transform-origin: center;
`

const StyledStripes = styled.div`
  opacity: 1;
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
`
const colors = ["mainColor", "mutedColor", "accentColor1", "darkColor"]

export const generateStripes = (quantity, size) => {
  const stripes = []
  for (let i = 0; i < quantity; i++) {
    stripes.push(
      <StyledStripe
        key={"Stripe" + i}
        fill={colors[i]}
        size={size}
        position={i}
      />
    )
  }
  return stripes
}

const Stripes = ({ size, quantity }) => {
  return (
    <StyledStripes className="Stripes">
      {generateStripes(quantity, size)}
    </StyledStripes>
  )
}

export default Stripes
