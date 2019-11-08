import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

const StyledSocialLinks = styled.div`
  margin-top: 30px;

  .social-svg-mask path {
    fill: ${props =>
      props.inverted ? props.theme.lightColor : props.theme.secondaryColor};
  }

  a {
    margin: 10px;
    transform: scale(0.9);
  }
`

const SocialLinks = props => {
  console.log(props)
  return (
    <StyledSocialLinks {...props}>
      <SocialIcon url="https://twitter.com/kervin5" />
      <SocialIcon url="https://github.com/kervin5" />
      <SocialIcon url="https://www.linkedin.com/in/kervin5/" />
    </StyledSocialLinks>
  )
}

export default SocialLinks
