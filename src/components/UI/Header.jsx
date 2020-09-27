import React from "react"
import { withTheme } from "styled-components"
import PropTypes from "prop-types"

const Header = React.forwardRef(
  (
    { as, children, weight, margin, nomargin, color = "darkColor", id, theme },
    ref
  ) => {
    const TagToRender = as
    const otherProps = id ? { id } : {}

    return (
      <TagToRender
        ref={ref}
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
)

Header.defaultProps = {
  as: "h1",
  weight: "bold",
  margin: "1.45rem",
  color: "darkColor",
}

Header.propTypes = {
  as: PropTypes.string,
}

export default withTheme(Header)
