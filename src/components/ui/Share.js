import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share"

const shareObjects = {
  Facebook: {
    color: "#3b5998",
    button: FacebookShareButton,
    icon: FacebookIcon,
  },
  LinkedIn: {
    color: "#0e76a8",
    button: LinkedinShareButton,
    icon: LinkedinIcon,
  },
  Twitter: { color: "#1da1f2", button: TwitterShareButton, icon: TwitterIcon },
  Whatsapp: {
    color: "#25D366",
    button: WhatsappShareButton,
    icon: WhatsappIcon,
  },
  Reddit: { color: "#FF5700", button: RedditShareButton, icon: RedditIcon },
}

const StyledShareButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const StyledShareButton = styled.div`
  background-color: ${props => props.mainColor};
  padding: 0 20px 0 10px;
  border-radius: 25px;
  overflow: hidden;
  transition: 100ms;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 700px) {
    padding: 0;
    .Label {
      display: none;
    }
  }

  & > * {
    display: flex;
    align-items: center;
    justify-items: center;

    .Label {
      color: ${props => props.theme.lightColor} !important;
      font-size: 0.8em;
    }
  }
`

const Share = ({ url }) => {
  return (
    <StyledShareButtons className="ShareButtons">
      {Object.entries(shareObjects).map(
        ([ShareServiceName, ShareService], index) => {
          return (
            <StyledShareButton
              key={ShareServiceName + index}
              mainColor={ShareService.color}
            >
              <ShareService.button url={url}>
                <ShareService.icon
                  size={40}
                  iconBgStyle={{ fill: ShareService.color }}
                />
                <span className="Label">{ShareServiceName}</span>
              </ShareService.button>
            </StyledShareButton>
          )
        }
      )}
    </StyledShareButtons>
  )
}

export default Share
