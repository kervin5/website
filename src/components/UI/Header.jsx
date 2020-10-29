import React from "react"
import styled from "styled-components"
import { withTheme } from "styled-components"
import PropTypes from "prop-types"

const StyledHeader = styled.div`
  &.Decoration {
    .HeaderContainer {
      display: inline-block;
      position: relative;
      & > * {
        position: relative;
        z-index: 2;
      }
      &::before {
        z-index: 1;
        position: absolute;
        display: block;
        overflow: hidden;
        content: "";

        left: 0;
        right: 0;
        bottom: 25px;
        height: 10px;
        background-color: ${(props) => props.theme.mainColor};
        transform: skewX(-20deg) rotate(-1deg);
      }
    }
  }
`

const Header = React.forwardRef(
  (
    {
      as,
      children,
      weight,
      margin,
      nomargin,
      color = "darkColor",
      id,
      theme,
      decoration,
    },
    ref
  ) => {
    const TagToRender = as
    const otherProps = id ? { id } : {}

    return (
      <StyledHeader
        className={decoration ? "Decoration" : ""}
        content={`${children}`}
      >
        <div className="HeaderContainer">
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
        </div>
      </StyledHeader>
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
