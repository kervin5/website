import React from "react"
import { Tween } from "react-gsap"
import useScrollDetector from "scroll-detect-hook"

const Skewer = ({ children }) => {
  const [, direction, speed] = useScrollDetector()

  return (
    <Tween
      to={{
        skewY: (direction === "up" ? 1 : -1) * (speed < 5 ? speed : 5) * 0.5,
      }}
      // ease="slow(0.01,0.01,false)"
      duration={1}
    >
      {children}
    </Tween>
  )
}

export default Skewer
