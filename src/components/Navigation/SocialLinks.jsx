import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

const StyledSocialLinks = styled.div`
  margin-top: 30px;

  .social-svg-mask path {
    fill: ${(props) =>
      props.inverted ? props.theme.lightColor : props.theme.accentColor1};
  }

  a {
    margin: 10px;
    transform: scale(0.9);
    transition: 300ms;
    animation-timing-function: cubic-bezier(0.08, 0.95, 1, 0.56);

    &:hover {
      transform: scale(1.1);
    }
  }
`

const SocialLinks = (props) => {
  return (
    <StyledSocialLinks {...props}>
      <SocialIcon url="https://twitter.com/kervin5" />
      <SocialIcon url="https://github.com/kervin5" />
      <SocialIcon url="https://www.linkedin.com/in/kervin5/" />
      <SocialIcon url="https://www.instagram.com/kervin.tech/" />
    </StyledSocialLinks>
  )
}

export default SocialLinks
