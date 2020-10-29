import React, { useRef, useState, useEffect, memo } from "react"
import styled from "styled-components"
import Shape from "./Shape"
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

const Shapes = ({ delay = 0, duration = 10, repeat = false }) => {
  const [numberOfshapes, setNumberOfShapes] = useState(10)

  // const [shapesToRender, setShapesToRender] = useState(null)
  const shapesRef = useRef(null)
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
      duration,
      {
        y: "100vh",
        repeat: repeat ? -1 : 0,
        delay,
        repeatDelay: delay > 0 ? duration : 0,
        ease: "none",
      },
      {
        y: "-100vh",
        repeat: repeat ? -1 : 0,
        delay,
        repeatDelay: delay > 0 ? duration : 0,
        ease: "none",
      }
    )
  }, [])

  return (
    <>
      <StyledShapes ref={shapesRef} className="Shapes">
        {shapesToRender}
      </StyledShapes>
    </>
  )
}

export default memo(Shapes, (prevProps, nextProps) => {
  return true
})
