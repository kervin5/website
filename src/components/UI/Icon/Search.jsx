import React from "react"
import styled from "styled-components"

const StyledSearchIcon = styled.span`
  position: relative;
  display: inline-block;
  background: #fff;
  border-radius: 30px;
  height: 6px;
  width: 6px;
  border: 2px solid #888;

  &:after {
    content: "";
    height: 2px;
    width: 6px;
    background: #888;
    position: absolute;
    top: 7px;
    left: 5px;
  }
`

const SearchIcon = () => {
  return <StyledSearchIcon />
}

export default SearchIcon
