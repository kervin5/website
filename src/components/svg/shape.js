import React, { memo } from "react"
import styled, { keyframes } from "styled-components"
import randomNumber from "../../lib/randomNumber"

import Shape1 from "../../images/shapes/Shape1.svg"
import Shape2 from "../../images/shapes/Shape2.svg"
import Shape3 from "../../images/shapes/Shape3.svg"
import Shape4 from "../../images/shapes/Shape4.svg"
import Shape5 from "../../images/shapes/Shape5.svg"
import Shape6 from "../../images/shapes/Shape6.svg"
import Shape7 from "../../images/shapes/Shape7.svg"
import Shape8 from "../../images/shapes/Shape8.svg"
import Shape9 from "../../images/shapes/Shape9.svg"
import Shape10 from "../../images/shapes/Shape10.svg"
import Shape11 from "../../images/shapes/Shape11.svg"
import Shape12 from "../../images/shapes/Shape12.svg"

const allShapes = [
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  Shape10,
  Shape11,
  Shape12,
]

const resize = () => {
  return keyframes`
          0%{
              transform: scale(0.5);
          }
  
          25%{
              transform: scale(0.3);
          }
  
          75%{
              transform: scale(0.6);
          }
          
          100% {
              transform: scale(0.5);
          }
      `
}

const rotate = () => {
  return keyframes`
            0%{
                transform: rotate(0deg) scale(0.5);
            }
    
            50% {
                transform: rotate(180deg) scale(0.3);
            }
            
            100% {
                transform: rotate(360deg) scale(0.5);
            }
        `
}

const StyledShape = styled.div.attrs(props => ({
  style: {
    top: props.position.y + "%",
    left: props.position.x + "%",
  },
}))`
  position: absolute;
  animation: ${props => (props.rotateShape ? rotate : resize)} 5s linear 2s
    infinite;
  animation-delay: ${props => props.delay}ms;
  transform: scale(0.5);
`

const Shape = ({ position }) => {
  const ElementToRender = allShapes[randomNumber(1, 12) - 1]
  return (
    <StyledShape
      className="Shape"
      position={position}
      delay={position.x * position.y}
      rotateShape={Math.random() >= 0.5}
    >
      <ElementToRender />
    </StyledShape>
  )
}

export default memo(Shape, (prevProps, nextProps) => {
  return true
  return (
    prevProps.position.x === nextProps.position.x &&
    prevProps.position.y === nextProps.position.y
  )
})
