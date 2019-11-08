import React from "react"
import Image from "./index"
import styled from "styled-components"

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  text-align: left;

  & > * {
    display: inline-block;
    width: 100%;
  }

  .iphone {
    max-width: 300px;
    position: relative;
    left: 10%;
    @media (max-width: 1050px) {
      max-width: 150px;
      /* display: none; */
    }
  }

  .laptop {
    position: absolute !important;
    top: 180px;
    left: 80%;
    transform: scale(1.8);
    /* left: 40%; */
  }
`

const DevicesImages = () => {
  return (
    <StyledDiv className="Devices">
      <Image src="iphone" className="iphone" />
      <Image src="laptop" className="laptop" />
    </StyledDiv>
  )
}

export default DevicesImages
