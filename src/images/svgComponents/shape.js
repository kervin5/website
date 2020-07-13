import React, { memo } from "react"
import styled, { keyframes } from "styled-components"
import randomNumber from "../../lib/randomNumber"

import Shape1 from "../assets/shapes/Shape1.svg"
import Shape2 from "../assets/shapes/Shape2.svg"
import Shape3 from "../assets/shapes/Shape3.svg"
import Shape4 from "../assets/shapes/Shape4.svg"
import Shape5 from "../assets/shapes/Shape5.svg"
import Shape6 from "../assets/shapes/Shape6.svg"
import Shape7 from "../assets/shapes/Shape7.svg"
import Shape8 from "../assets/shapes/Shape8.svg"
import Shape9 from "../assets/shapes/Shape9.svg"

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
]

const resize = () => {
  return keyframes`
          0%{
              transform: scale3d(0.5,0.5,1);
          }
  
          25%{
              transform: scale3d(0.3,0.3,1);
          }
  
          75%{
              transform: scale3d(1.4,1.4,1);
          }
          
          100% {
              transform: scale3d(0.5,0.5,1);
          }
      `
}

const rotate = () => {
  return keyframes`
           0% { 
       
       transform: rotate3d(0, 0, 1, 0deg) scale3d(0.5,0.5,1);;
    }
    50% { 
      
       transform: rotate3d(0, 0, 1, 180deg) scale3d(2,2,1);;
    }
    100% { 
      
       transform: rotate3d(0, 0, 1, 360deg) scale3d(0.5,0.5,1);;
    }
           
        `
}

const StyledShape = styled.div.attrs((props) => ({
  style: {
    top: props.position.y + "vh",
    left: props.position.x + "vw",
    transform: "scale(0.5) ",
  },
}))`
  position: absolute;
  animation: ${(props) => (props.rotateShape ? rotate : resize)} 5s linear
    infinite;
  animation-delay: ${(props) => props.delay}ms;

  transition: 300ms;
  opacity: 1;
`

const Shape = ({ position, forwardRef }) => {
  const ElementToRender = allShapes[randomNumber(1, 9) - 1]
  return (
    <StyledShape
      className="Shape"
      position={position}
      delay={position.x * position.y}
      rotateShape={Math.random() >= 0.5}
      ref={forwardRef}
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
