import React, { memo, useState, useEffect } from "react"
import styled from "styled-components"
import Shape from "./shape"
import randomNumber from "../../lib/randomNumber"
import useWindowWidth from "../../hooks/useWindowWidth"

const StyledShapes = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Shapes = () => {
  const width = useWindowWidth()
  const [numberOfshapes, setNumberOfShapes] = useState(0)
  const [shapesToRender, setShapesToRender] = useState(null)

  useEffect(() => {
    if (width > 920) {
      setNumberOfShapes(45)
    } else {
      setNumberOfShapes(20)
    }
  }, [width])

  useEffect(() => {
    setShapesToRender(
      [...Array(numberOfshapes).keys()].map(index => {
        const position = { x: randomNumber(1, 100), y: randomNumber(1, 100) }
        return (
          <Shape
            key={"Shape" + position.x + position.y + index}
            position={position}
          />
        )
      })
    )
  }, [numberOfshapes])

  return <StyledShapes className="Shapes">{shapesToRender}</StyledShapes>
}

export default memo(Shapes)
