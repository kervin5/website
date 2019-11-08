import React from "react"
import { theme } from "./layout/Theme"

const HTag = ({ as, children, weight, margin, nomargin, color }) => {
  const TagToRender = as

  return (
    <TagToRender
      style={{
        fontWeight: weight,
        color: theme[color],
        marginBottom: nomargin ? "0" : margin,
      }}
    >
      {children}
    </TagToRender>
  )
}

HTag.defaultProps = {
  as: "h1",
  weight: "bold",
  margin: "1.45rem",
  color: "darkColor",
}

export default HTag
