import React from "react"
import { theme } from "../layout/Theme"
import PropTypes from "prop-types"

const HTag = ({ as, children, weight, margin, nomargin, color, id }) => {
  const TagToRender = as
  const otherProps = id ? { id } : {}

  return (
    <TagToRender
      style={{
        fontWeight: weight,
        color: theme[color],
        marginBottom: nomargin ? "0" : margin,
      }}
      {...otherProps}
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

HTag.propTypes = {
  as: PropTypes.string,
}

export default HTag
