import React from "react"
import { Tween } from "react-gsap"
import useScrollDetector from "scroll-detect-hook"

const Skewer = ({ children }) => {
  const [isScrolling, direction, speed] = useScrollDetector()
  return (
    <Tween
      to={{
        skewY: isScrolling
          ? (direction === "up" ? 1 : -1) * (speed < 5 ? speed : 5) * 0.6
          : 0,
      }}
      ease="slow(0.7,0.7,false)"
      duration={1}
    >
      {children}
    </Tween>
  )
}

export default Skewer
