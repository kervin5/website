import React from "react"
import { Tween } from "react-gsap"

const Skewer = ({ children, stagger }) => {
  return (
    <Tween
      from={{
        y: "100vh",
      }}
      ease="expo.out"
      duration={2.5}
    >
      {children}
    </Tween>
  )
}

export default Skewer
