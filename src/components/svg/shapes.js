import React from "react"
import styled from "styled-components"
import Shape from "./shape"
import randomNumber from "../../lib/randomNumber"

const StyledShapes = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Shapes = () => {
  return (
    <StyledShapes className="Shapes">
      {[...Array(45).keys()].map(index => {
        const position = { x: randomNumber(1, 100), y: randomNumber(1, 100) }
        return (
          <Shape
            key={"Shape" + position.x + position.y + index}
            position={position}
          />
        )
      })}
    </StyledShapes>
  )
}

export default Shapes
