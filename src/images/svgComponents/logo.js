import React from "react"
import MyLogo from "../assets/logo.svg"
import styled, { keyframes } from "styled-components"

const colorize = (props) => {
  return keyframes`
  from {
    fill: black;
  }

  to {
    fill: ${props.theme.accentColor3};
  }
`
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  
  svg {
    path, circle {
     &:nth-child(even) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate; 
      }

      &:nth-child(odd) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate;
        animation-delay: 10s;
      }

      /* &:nth-child(3) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate;
        animation-delay: 20s;
      }

      &:nth-child(4) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate;
        animation-delay: 30s;
      }

      &:nth-child(5) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate;
        animation-delay: 40s;
      }

      &:nth-child(6) {
        animation: ${colorize} 9s cubic-bezier(.17,.67,.83,.67) infinite alternate;
        animation-delay: 50s;
      } */

    }
  }
`

const SVG = () => {
  return (
    <StyledDiv>
      <MyLogo />
    </StyledDiv>
  )
}

export default SVG
