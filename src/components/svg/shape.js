import React, { Suspense } from "react"
import styled, { keyframes } from "styled-components"
import randomNumber from "../../lib/randomNumber"

const resize = () => {
  return keyframes`
        0%{
            transform: scale(1);
        }

        20%{
            transform: scale(0.5);
        }

        60%{
            transform: scale(0.8);
        }
        
        100% {
            transform: scale(1.1);
        }
    `
}

const rotate = () => {
  return keyframes`
          0%{
              transform: rotate(0deg);
          }
  
          
          
          100% {
              transform: rotate(360deg);
          }
      `
}

const StyledShape = styled.div`
  position: absolute;
  top: ${props => props.position.y}%;
  left: ${props => props.position.x}%;
  animation: ${props => (props.rotateShape ? rotate : resize)} 5s linear 2s
    infinite ${props => (props.rotateShape ? "" : "alternate")};
  animation-delay: ${props => props.delay}ms;
`

const Shape = ({ position }) => {
  const SVGShape = React.lazy(() =>
    import(`../../images/shapes/Shape${randomNumber(1, 12)}.svg`)
  )

  console.log(position.x * position.y)
  return (
    <StyledShape
      className="Shape"
      position={position}
      delay={position.x * position.y}
      rotateShape={Math.random() >= 0.5}
    >
      <Suspense fallback={<span></span>}>
        <SVGShape />
      </Suspense>
    </StyledShape>
  )
}

export default Shape
