import React from "react"
import { Tween } from "react-gsap"
import useScrollDetector from "scroll-detect-hook"

const Skewer = ({ children }) => {
  const [isScrolling, direction, speed] = useScrollDetector()
  console.log(speed)
  return (
    <Tween
      to={{
        skewY: (direction === "up" ? 1 : -1) * (speed < 5 ? speed : 5) * 2,
      }}
      ease="slow(0.7,0.7,false)"
      duration={1}
    >
      {children}
    </Tween>
  )
}

export default Skewer
