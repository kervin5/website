import React from "react"
import { MorphReplace } from "react-svg-morph"
import SunSVG from "../../images/sun.svg"
import MoonSVG from "../../images/moon.svg"

const SVG = ({ light }) => {
  return (
    <MorphReplace height="30px" duration={200}>
      {!light ? <SunSVG key="SunSVG" /> : <MoonSVG key="MoonSVG" />}
    </MorphReplace>
  )
}

export default SVG
