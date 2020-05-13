import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledTag = styled.span`
  display: inline-block;
  background-color: ${props => props.color.bg};
  color: ${props => props.color.font};
  padding: 0px 5px;
  border-radius: 5px;
  font-size: 0.8em;
  margin-right: 0.3rem;
  transition: 300ms;
  &:hover {
    transform: scale(1.1) rotate(2deg);
    cursor: pointer;
  }
`

const StringToColor = (function() {
  let instance = null

  return {
    next: function stringToColor(str) {
      console.log(str)
      if (instance === null) {
        instance = {}
        instance.stringToColorHash = {}
        instance.nextVeryDifferntColorIdx = 0
        instance.veryDifferentColors = [
          {
            bg: "#F8B195",
            font: "black",
          },
          { bg: "#F67280", font: "white" },
          { bg: "#C06C84", font: "white" },
          { bg: "#6C5B7B", font: "white" },
          { bg: "#355C7D", font: "white" },
          { bg: "#A7226E", font: "white" },
          { bg: "#EC2049", font: "white" },
          { bg: "#F26B38", font: "black" },
          { bg: "#F7DB4F", font: "black" },
          { bg: "#2F9599", font: "white" },
          { bg: "#45ADA8", font: "black" },
          { bg: "#547980", font: "white" },
          { bg: "#594F4F", font: "white" },
          { bg: "#F9D423", font: "black" },
          { bg: "#FC913A", font: "black" },
        ]
      }

      if (!instance.stringToColorHash[str]) {
        if (
          instance.nextVeryDifferntColorIdx ===
          instance.veryDifferentColors.length - 1
        ) {
          instance.nextVeryDifferntColorIdx = 0
        }
        instance.stringToColorHash[str] =
          instance.veryDifferentColors[instance.nextVeryDifferntColorIdx++]
      }

      return instance.stringToColorHash[str]
    },
  }
})()

const Tag = ({ children, slug }) => {
  console.log({ children })
  return (
    <Link to={`/blog/tag/${slug}`}>
      <StyledTag className="BlogTag" color={StringToColor.next(children)}>
        {children}
      </StyledTag>
    </Link>
  )
}

export default Tag
