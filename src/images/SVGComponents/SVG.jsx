import React, { useState, useEffect } from "react"
import yourSVG from "../images/person.svg"

const SVG = ({ src }) => {
  const [imageToRender, setImageToRender] = useState(null)

  useEffect(() => {
    import("../images/" + src).then((svgFile) => {
      setImageToRender(svgFile)
    })
  }, [])

  return imageToRender ? <img src={imageToRender} /> : null
  // return <img src={yourSVG} />
}

export default SVG
