import React from "react"
import styled from "styled-components"

const StyledHabmburgerToggle = styled.div`
  float: right;
  position: relative;
  z-index: 100;
  cursor: pointer;
  span {
    height: 5px;
    width: 30px;
    display: block;
    background-color: ${(props) =>
      props.open ? props.theme.lightColor : props.theme.accentColor3};
    margin-bottom: 3px;
    border-radius: 3px;
    transition: 300ms;
  }

  &.Open {
    span:nth-child(2) {
      display: none;
    }

    span:nth-child(1) {
      transform: rotate(45deg) translateY(5px);
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-5px);
    }
  }
`

const HamburgerToggle = ({ open, toggle }) => {
  return (
    <StyledHabmburgerToggle
      onClick={() => toggle(!open)}
      open={open}
      className={open ? "Open" : "Closed"}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHabmburgerToggle>
  )
}

export default HamburgerToggle
