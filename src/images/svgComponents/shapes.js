import React, { useRef, useState, useEffect, memo } from "react"
import styled from "styled-components"
import Shape from "./shape"
import randomNumber from "../../lib/randomNumber"
import { TweenMax } from "gsap"
// import useWindowWidth from "../../hooks/useWindowWidth"

const StyledShapes = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
`

const Shapes = ({ slideUp }) => {
  const [numberOfshapes, setNumberOfShapes] = useState(10)
  // const [shapesToRender, setShapesToRender] = useState(null)
  const shapesRef = useRef([])
  const shapesToRender = [...Array(numberOfshapes).keys()].map((index) => {
    const position = { x: randomNumber(1, 100), y: randomNumber(1, 100) }
    return (
      <Shape
        key={"Shape" + position.x + position.y + index}
        position={position}
        // forwardRef={(element) => {
        //   shapesRef.current[index] = element
        // }}
      />
    )
  })

  useEffect(() => {
    TweenMax.fromTo(
      shapesRef.current,
      20,
      {
        y: "100vh",

        repeat: -1,
      },
      {
        y: "-100vh",

        repeat: -1,
        stagger: -12,
      }
    )
  }, [])

  return (
    <>
      <StyledShapes ref={(el) => shapesRef.current.push(el)} className="Shapes">
        {shapesToRender}
      </StyledShapes>
      <StyledShapes ref={(el) => shapesRef.current.push(el)} className="Shapes">
        {shapesToRender}
      </StyledShapes>
    </>
  )
}

export default memo(Shapes, (prevProps, nextProps) => {
  return true
})
