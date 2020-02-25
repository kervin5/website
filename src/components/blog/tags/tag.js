import React from "react"
import styled from "styled-components"

const StyledTag = styled.span`
  display: inline-block;
  background-color: ${props => props.color.bg};
  color: ${props => props.color.font};
  padding: 0px 5px;
  border-radius: 5px;
  font-size: 0.8em;
  margin-right: 0.3rem;
`

const StringToColor = (function() {
  let instance = null

  return {
    next: function stringToColor(str) {
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
          { bg: "#A7226E", font: "black" },
          { bg: "#EC2049", font: "black" },
          { bg: "#F26B38", font: "black" },
          { bg: "#F7DB4F", font: "black" },
          { bg: "#2F9599", font: "black" },
          { bg: "#45ADA8", font: "black" },
          { bg: "#547980", font: "black" },
          { bg: "#594F4F", font: "black" },
          { bg: "#F9D423", font: "black" },
          { bg: "#FC913A", font: "black" },
        ]
      }

      if (!instance.stringToColorHash[str])
        instance.stringToColorHash[str] =
          instance.veryDifferentColors[instance.nextVeryDifferntColorIdx++]

      return instance.stringToColorHash[str]
    },
  }
})()

const Tag = ({ children }) => {
  return <StyledTag color={StringToColor.next(children)}>#{children}</StyledTag>
}

export default Tag
